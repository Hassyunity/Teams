import React from 'react';
import Navbar from './Navbar';
import './App.css';

import DatatablePage from './components/Table';
import TodoList from './components/TodoList';
// import MyForm from './components/Post';



function App() {
  return (

    <div className="App">
      <Navbar />
      <TodoList />
      <DatatablePage />
      {/* <MyForm /> */}
    </div>

  );
}

export default App;

