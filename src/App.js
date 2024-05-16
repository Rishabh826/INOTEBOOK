import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login'; // Corrected import
import Signup from './components/Signup';
import NoteState from './context/NoteState';
import { Alert } from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is amazing React course" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} /> {/* Corrected route */}
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
