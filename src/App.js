import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login'; // Corrected import
import Signup from './components/Signup';
import NoteState from './context/NoteState';
import  Alert  from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About    />} />
            <Route path="/Login" element={<Login  showAlert={showAlert} />} /> {/* Corrected route */}
            <Route path="/Signup" element={<Signup  showAlert={showAlert} />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
