
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notestate from './context/Notestate';
function App() {
  return (
    <>
    <Notestate>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/Home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </Notestate>

   </>

   
  );
}

export default App;
