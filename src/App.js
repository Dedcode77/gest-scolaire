import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connection from './components/connection/Connection';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
