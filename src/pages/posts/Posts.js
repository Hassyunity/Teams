import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import Post from "./Post";
import ".././styles/Post.css";
import {
  getPosts as getPostsApi,
  createPost as createPostApi,
  updatePost as updatePostApi,
  deletePost as deletePostApi,
} from "../api";
const Posts = ({ postsUrl, currentUserId }) => {
  const [backendPosts, setBackendPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const rootPosts = backendPosts.filter(
    (backendPost) => backendPost.parentId === null
  );
  const getReplies = (postId) =>
    backendPosts
      .filter((backendPost) => backendPost.parentId === postId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addPost = (text, parentId) => {
    createPostApi(text, parentId).then((post) => {
      setBackendPosts([post, ...backendPosts]);
      setActivePost(null);
    });
  };

  const updatePost = (text, postId) => {
    updatePostApi(text).then(() => {
      const updatedBackendPosts = backendPosts.map((backendPost) => {
        if (backendPost.id === postId) {
          return { ...backendPost, body: text };
        }
        return backendPost;
      });
      setBackendPosts(updatedBackendPosts);
      setActivePost(null);
    });
  };
  const deletePost = (postId) => {
    if (window.confirm("Are you sure you want to remove post?")) {
      deletePostApi().then(() => {
        const updatedBackendPosts = backendPosts.filter(
          (backendPost) => backendPost.id !== postId
        );
        setBackendPosts(updatedBackendPosts);
      });
    }
  };

  useEffect(() => {
    getPostsApi().then((data) => {
      setBackendPosts(data);
    });
  }, []);

  return (
    <div className="posts">
      <h3 className="posts-title">Bogs</h3>
      <div className="post-form-title">Write yours post</div>
      <PostForm submitLabel="Write" handleSubmit={addPost} />
      <div className="posts-container">
        {rootPosts.map((rootPost) => (
          <Post
            key={rootPost.id}
            post={rootPost}
            replies={getReplies(rootPost.id)}
            activePost={activePost}
            setActivePost={setActivePost}
            addPost={addPost}
            deletePost={deletePost}
            updatePost={updatePost}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;