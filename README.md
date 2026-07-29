# Kidist Meseret - Personal Portfolio

A modern, responsive personal portfolio web application built with **React**, **Vite**, and **CSS3**. Designed with a sleek dark theme, gold accents, and a card-based layout to showcase software engineering projects, technical skills, and professional experience.

---

## 🚀 Features

- **Responsive Design**: Built mobile-first with CSS Grid and Flexbox to deliver a seamless experience across desktop, tablet, and mobile displays.
- **Modern UI & Theme**: Features a custom dark/gold design palette (`#d4af37`), smooth scroll navigation, and glassmorphic card elements.
- **Component Architecture**: Modular React components (`Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer`) for easy maintenance and clean separation of concerns.
- **Interactive UI**: Custom hover cards, border glow transitions, and responsive navigation links.

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Media Queries)
- **Deployment**: Vercel 



##  Project Structure

```text
portfolio/
├── public/
│   └── image.jpg          # Profile photo asset
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── SkillCard.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   └── style.css      # Global styles, layout, theme variables
│   ├── App.jsx            # Main application layout
│   ├── data.js            # Skill & Project structured data
│   └── main.jsx           # App entry point
├── package.json
└── README.md