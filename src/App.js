import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountWrapper from './components/Counter/CountWrapper';
import TodoWrapper from './components/Todo/TodoWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountWrapper></CountWrapper>
        <TodoWrapper></TodoWrapper>
      </header>
    </div>
  );
}

export default App;
