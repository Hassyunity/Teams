import React from 'react';
import Posts from "./posts/Posts";

const Blogs = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      
      {/* <h1>Welcome to GeeksforGeeks Blogs</h1>
      <h1>Hello monsterlessons</h1> */}
      <Posts
        currentUserId="1"
      />
    </div>
  );
};

export default Blogs;
