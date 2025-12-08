import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Launchpad from './pages/Launchpad';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet" element={<Launchpad />} />
    </Routes>
  );
}

export default App;