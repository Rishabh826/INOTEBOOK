import React from 'react';
import './App.css';
import {  HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login'; // Corrected import
import Signup from './components/Signup';
import NoteState from './context/NoteState';
import Inote from './components/Inote';
import Contact from './components/Contact';



function App() {
 
  
  return (
    <>
      <NoteState>
        <HashRouter>
          <Navbar />
          
          <Routes>
          <Route path="/" element={<Inote  />} />
            <Route path="/Home" element={<Home  />} />
            <Route path="/about" element={<About    />} />
            <Route path="/Login" element={<Login   />} />
            <Route path="/Signup" element={<Signup   />} />
            <Route path="/contact" element={<Contact   />} />
          </Routes>
        </HashRouter>
      </NoteState>
    </>
  );
}

export default App;
