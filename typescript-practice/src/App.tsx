import React from 'react';

import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['Land new job', 'Take a nap']}/>
    </div>
  );
}

export default App;
