import React, { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
const newTodo = new Todo(todoText);
setTodos((prevTodos) => {
  return prevTodos.concat(newTodo);
});
  };

  return (
    <div>
      <NewTodo onAddToDo={addToDoHandler} />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
