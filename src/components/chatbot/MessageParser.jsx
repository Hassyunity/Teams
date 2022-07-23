import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('i am') || message.includes('my name is')) {
      actions.handleName();
    }
    if (message.includes('hello')) {
      actions.handleHello();
    }
    if (message.includes('bye')) {
      actions.handleBye();
    }
    if (message.includes('?')) {
      actions.handleQuestion();
    }
    if (message.includes('dog')) {
      actions.handleDog();
      }
    if (message.includes('cat')) {
      actions.handleCat();
    }
    if (message.includes('thanks') || message.includes('thank you')) {
      actions.handleThanks();
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