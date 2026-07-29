import photo from "../assets/me.jpg";

function Hero({ name, title }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{name}</h1>
        <h3>{title}</h3>

        <p>
          Passionate Software Engineering student who loves creating beautiful,
          responsive websites and learning modern technologies.
        </p>

        <button>Download CV</button>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Kidist Meseret" />
      </div>
    </section>
  );
}

export default Hero;