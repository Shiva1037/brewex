import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CMSPage from './pages/CMSPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cms" element={<CMSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
