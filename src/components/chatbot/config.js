import { createChatBotMessage } from 'react-chatbot-kit';
import CatPicture from './CatPicture.jsx';
import DogPicture from './DogPicture.jsx';

const botName = 'Teamchat';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],

  botName: botName,
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'catPicture',
      widgetFunc: (props) => <CatPicture {...props} />,
    },
  ],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;