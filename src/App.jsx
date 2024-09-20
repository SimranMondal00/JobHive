// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddJob from './components/AddJob';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div className="p-4">About JobHive</div>} />
          <Route path="/addjob" element={<AddJob />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
