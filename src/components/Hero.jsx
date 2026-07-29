import photo from "../assets/me.jpg";

function Hero({ name, title }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{name}</h1>
        <h3>{title}</h3>

        <p>
          Passionate Software Engineering student who enjoys creating modern,
          responsive websites and learning new technologies.
        </p>

        <button>View Projects</button>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Kidist Meseret" />
      </div>
    </section>
  );
}

export default Hero;