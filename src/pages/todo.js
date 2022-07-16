import React from 'react';
import './styles/Todo.css';
import TodoList from '../components/TodoList';
const TodoReport = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Right',
        height: '100vh'
      }} className='todo-page'
    >
      <TodoList />
    </div>
  );
};

export default TodoReport;
