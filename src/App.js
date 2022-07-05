import React from 'react';
import Navbar from './Navbar';
import './App.css';

import DatatablePage from './components/Table';
import TodoList from './components/TodoList';




function App() {
  return (
    
    <div className="App">
     <Navbar />
      <TodoList />
      <DatatablePage />
    </div>
    
  );
}

export default App;

