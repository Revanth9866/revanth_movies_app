import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'; // ✅ correct path inside src


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>


  );
}

export default App;
