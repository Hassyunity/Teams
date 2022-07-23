
import React from 'react';
import Calendar from './calendar';

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
      <h1>Welcome in Teams</h1>
      <Calendar />

  </div>
  );
};

export default Home;
