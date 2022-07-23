
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
      
      <table>
        <td>
          <tr><h2>Welcome in Teams</h2></tr>
          <tr> <Calendar /></tr>
        </td>
      </table>
     

  </div>
  );
};

export default Home;
