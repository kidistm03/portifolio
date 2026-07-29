import photo from "../assets/me.jpg";

function Hero({ name, title }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hello">Hello, I'm</p>

        <h1>{name}</h1>

        <h2>{title}</h2>

        <p className="intro">
          Passionate Software Engineering student with a love for building
          modern, responsive, and user-friendly web applications. I enjoy
          learning new technologies and solving real-world problems through
          software.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Kidist Meseret" />
      </div>
    </section>
  );
}

export default Hero;