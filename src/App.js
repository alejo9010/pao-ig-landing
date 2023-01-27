import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Asesorias from './pages/Asesorias';
import Header from './components/Header';
import Main from './pages/Main';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/asesorias' element={<Asesorias />} />
      </Routes>
    </Router>
  );
}

export default App;
