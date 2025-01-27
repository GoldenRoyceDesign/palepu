
import './App.css';
import './responsive.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Management from './pages/Management';
import Weborder from './pages/Weborder';
import Location from './pages/Location';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/management' element={<Management />} />
          <Route path='/weborder' element={<Weborder />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
