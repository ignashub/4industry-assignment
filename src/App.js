import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
