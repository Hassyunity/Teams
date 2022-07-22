import React, { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
import styles from "./styles/Chat.module.css";
import Modal from "../components/modal/Modal";

const Chats = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <div>
      <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
      open the discussion
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
    </div>
    </div>
  );
};

export default Chats;
