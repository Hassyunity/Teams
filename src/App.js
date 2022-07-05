import React from 'react';
import Navbar from './Navbar';
import './App.css';

import DatatablePage from './components/Table';
import TodoList from './components/TodoList';
import renderForm from './components/Login';
// import MyForm from './components/Post';



function App() {
  return (

    <div className="App">
      <Navbar />
      <TodoList />
      <DatatablePage />
      <renderForm />
      {/* <MyForm /> */}
      <div className="form">
        <form>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>

  );
}




export default App;

