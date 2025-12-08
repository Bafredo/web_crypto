import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Launchpad from './pages/Launchpad';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet" element={<Launchpad />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;