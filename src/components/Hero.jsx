export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="hello">HELLO, I'M</p>
        <h1>Kidist Meseret</h1>
        <h2>Software Engineering Student</h2>
        <p className="intro">
          Passionate Software Engineering student with a love for building modern,
          responsive, and user-friendly web applications. I enjoy learning new
          technologies and solving real-world problems through software.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="src/assets/me.jpg" alt="Kidist Meseret" />
      </div>
    </section>
  );
}