import React from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Land new nursing job'),
    new Todo('Take a nap')

  ];

  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
