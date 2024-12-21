import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin';
// import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;