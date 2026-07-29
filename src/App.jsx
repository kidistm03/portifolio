import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { skillsData, projectsData } from './data';
import './styles/style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skillsData} />
      <Projects projects={projectsData} />
      <Contact />
      <Footer />
    </div>
  );
}