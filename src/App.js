import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
