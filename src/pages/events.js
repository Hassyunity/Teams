import React from 'react';
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import { ChatList } from "react-chat-elements";
import { MessageList } from "react-chat-elements";
import { ChatItem } from "react-chat-elements";
import { Dropdown } from "react-chat-elements";
import { IconContext } from 'react-icons';
import { Input } from 'react-chat-elements'



const Events = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to GeeksforGeeks Events</h1>
       <table>
        <tr>
        <td>
          
        </td>
        </tr>
      <tr>
        <td>
            <ChatItem
              avatar="https://avatars.githubusercontent.com/u/41473129?v=4"
              alt="kursat_avatar"
              title="Emre"
              subtitle="What are you doing ?"
              date={new Date()}
              muted={true}
              showMute={true}
              showVideoCall={true}
              unread={2}
            />
          </td>
      </tr>
    </table>
      
      
    </div>
    
    
  );
};

export default Events;
