import React from 'react';
import './styles/index.css'

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>
        <a class="github-fork-ribbon"
        title="Fork me on GitHub"
        >
          Welcome in Teams
        </a>
        </h1>
  </div>
  );
};

export default Home;
