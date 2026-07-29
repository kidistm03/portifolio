function Navbar({ name }) {
  return (
    <nav>
      <h2>{name}</h2>

      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;