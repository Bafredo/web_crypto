import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Launchpad from './pages/Launchpad';
import Admin from './pages/Admin';
import Success from './pages/Success';
import Gateway from './components/Gateway';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet" element={<Launchpad />} />
      <Route path="/admin" element={<Admin />} />
       <Route path="/success" element={<Success/>} />
       <Route path='/test' element={<Gateway/>}/>
    </Routes>
  );
}

export default App;