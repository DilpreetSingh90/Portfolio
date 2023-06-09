import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/resume' element={<Resume />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
