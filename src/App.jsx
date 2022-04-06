import React from 'react';
import './App.css';
import { Navbar, AnimatedRoutes } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App;
