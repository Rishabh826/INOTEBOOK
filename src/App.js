import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login'; // Corrected import
import Signup from './components/Signup';
import NoteState from './context/NoteState';


function App() {
 
  
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/about" element={<About    />} />
            <Route path="/Login" element={<Login   />} />
            <Route path="/Signup" element={<Signup   />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
