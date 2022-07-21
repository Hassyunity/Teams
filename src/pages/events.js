import React, { useState } from "react";
import styles from "./styles/Event.module.css";
import Modal from "../components/modal/Modal";

const Events = () => {
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
      <h1>Events pages</h1>
      <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
    </div>
  );
};

export default Events;
