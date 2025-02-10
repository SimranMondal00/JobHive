// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddJob from './components/AddJob';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import About from './components/About';
import BrowseJob from './components/BrowseJob';
import SavedJobs from './components/SavedJobs'; // Import SavedJobs component

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/browse-job" element={<BrowseJob />} />
          <Route path="/saved-jobs" element={<SavedJobs />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
