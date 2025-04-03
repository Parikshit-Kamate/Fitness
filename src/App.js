import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Programs from './Components/Programs';
import About from './Components/About';
import Plans from './Components/Plans';
import Navbar from './Navbar/Navbar';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>



          <Route path='/' element={<Home />} />



          <Route path='/home' element={<Home />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/about' element={<About />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/contact' element={<Contact />} />



        </Routes>




      </BrowserRouter>



    </div>
  );
}

export default App;
