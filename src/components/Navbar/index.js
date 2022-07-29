import React, { useState } from 'react';

import 'react-chatbot-kit/build/main.css';
import styles from "../../pages/styles/Chat.module.css";
import Modal from "../modal/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to={"/home"}>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {/* <NavLink to='/chats' activeStyle>
            Chats
          </NavLink> */}
          <NavLink to='/todo' activeStyle>
            Todos
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
      <div className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
      <FontAwesomeIcon icon={faCommentDots} />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
