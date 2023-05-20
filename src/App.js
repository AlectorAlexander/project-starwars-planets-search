import React from 'react';
import './App.css';
import Provider from './context/SWProvider';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Provider>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
