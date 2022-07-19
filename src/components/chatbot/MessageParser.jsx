import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    if (message.includes('dog')) {
        actions.handleDog();
      }
    if (message.include('bye')) {
        actions.handleBye('fhgj');
      }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;