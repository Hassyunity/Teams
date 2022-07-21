import React from 'react';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../components/chatbot/config.js';
import MessageParser from '../components/chatbot/MessageParser.jsx';
import ActionProvider from '../components/chatbot/ActionProvider.jsx';

const Chats = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Chats pages</h1>
      <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
    </div>
  );
};

export default Chats;
