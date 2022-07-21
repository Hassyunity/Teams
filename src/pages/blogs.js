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
      
      <Posts
        currentUserId="1"
      />
    </div>
  );
};

export default Blogs;
