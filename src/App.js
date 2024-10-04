import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Board from './components/Board';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Memory Matching Game</h1>
        <Board />
      </div>
    </Provider>
  );
};

export default App;
