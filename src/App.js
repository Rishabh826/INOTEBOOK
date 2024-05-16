import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
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
         
          
       
           
             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About />} />
              
              
          
        </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;