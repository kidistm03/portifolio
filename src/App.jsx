import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import data from "./data";

function App() {
  return (
    <>
      <Navbar name={data.name} />

      <Hero
        name={data.name}
        title={data.title}
      />

      <About about={data.about} />

      <Skills skills={data.skills} />

      <Projects projects={data.projects} />

      <Contact
        email={data.email}
        github={data.github}
        linkedin={data.linkedin}
      />

      <Footer />
    </>
  );
}

export default App;