function Contact({ email, github, linkedin }) {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <p>Email: {email}</p>

      <p>
        <a href={github}>GitHub</a>
      </p>

      <p>
        <a href={linkedin}>LinkedIn</a>
      </p>
    </section>
  );
}

export default Contact;