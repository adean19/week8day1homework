import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <TodoList />
    </div>
  );
}

export default App;
