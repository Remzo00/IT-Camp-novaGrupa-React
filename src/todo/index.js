import React, { useState,useEffect } from "react";
import { fetchTodos, createTodo } from "../api";
//CRUD
//Create
//Read
//Update
//Delete

//HTTP
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');


//      useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchTodos();
//       setTodos(data);
//     };

//     fetchData();
//   }, []);

  const handleCreateTodo = async () => {
    const newTodo = { title: newTodoTitle, completed: false };
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

    return(
        <div>
             <input
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        placeholder="Enter a new todo"
      />
        <button onClick={handleCreateTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
}

export default Todo