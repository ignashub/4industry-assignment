import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

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
