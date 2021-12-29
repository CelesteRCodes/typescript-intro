import React, { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('Land new nursing job'),
    new Todo('Take a nap')

  ];

  return (
    <div>
      <NewTodo />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
