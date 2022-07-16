import React, { useState, useEffect, useRef } from 'react';
// import { Form } from 'react-bootstrap'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('')
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
                <input 
                    type="text"
                    placeholder="update your item" 
                    value={input} name="text" 
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button edit'>Update</button>
            </>
            ) :
            (
            <>
                <input 
                    type="text"
                    placeholder="Add a todo" 
                    value={input} name="text" 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button'>Add todo</button>
            </>
            )
        }
        
    </form>
  );
}

export default TodoForm;