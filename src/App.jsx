import React from 'react';
import './App.css';
import { Navbar, Homepage, CardsPage } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
