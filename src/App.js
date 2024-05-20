import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login'; // Corrected import
import Signup from './components/Signup';
import NoteState from './context/NoteState';
import Inote from './components/Inote';


function App() {
 
  
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
          <Route path="/" element={<Inote  />} />
            <Route path="/Home" element={<Home  />} />
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
