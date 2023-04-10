import React, { useState } from 'react'

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]); // adding todo to the list

    setInput(""); //clearing input box
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id); //deleting todo items
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text" value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ol>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App
