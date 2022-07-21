import React from "react";
import styles from "./Modal.module.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;