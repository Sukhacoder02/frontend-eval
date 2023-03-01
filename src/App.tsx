import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
