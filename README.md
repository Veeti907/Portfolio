🚀 Veeti Portfolio

Moderni ja responsiivinen developer-portfolio, rakennettu Reactilla ja TypeScriptilla.
Sisältää dark/light theme -järjestelmän, reitityksen ja modernin UI-designin.

✨ Features

🌗 Dark / Light mode toggle

⚡ React Router v6 navigointi

🎨 CSS variable -pohjainen design system

💎 Modern glass navbar

📱 Täysin responsiivinen layout

🎬 Smooth hover- ja fade-animaatiot

🧩 Modulaarinen komponenttirakenne

🧠 TypeScript-tyypitetty

🛠 Tech Stack

React

TypeScript

React Router

CSS (Custom Properties / Design System)

Bootstrap (layout utilities)

📂 Sivut

/ – Etusivu (Hero + About)

/projektit – Projektit

/taidot – Osaaminen

/contact – Yhteystiedot

🎨 Theme System

Projekti käyttää CSS-muuttujia teemojen hallintaan:

:root = Dark mode (default)

[data-theme='light'] = Light mode

Teeman vaihto:

document.documentElement.setAttribute('data-theme', theme)


Kaikki värit, varjot ja taustat ovat muuttujapohjaisia → ei kovakoodattuja värejä.

📦 Asennus
git clone https://github.com/Veeti907/portfolio
cd portfolio
npm install
npm run dev

📁 Projektirakenne
src/
│
├── Navbar.tsx
├── Footer.tsx
├── Home.tsx
├── Projektit.tsx
├── Taidot.tsx
├── Contact.tsx
├── Etusivucontent.tsx
├── Layout.tsx
├── App.tsx
└── index.css

🎯 Tavoite

Tämän projektin tarkoitus on:

Esitellä frontend-osaamista

Demonstroida modernia UI-rakennetta

Näyttää TypeScript-osaaminen

Toimia työnhaun portfoliona

📌 Tulevat parannukset

📩 Toimiva contact form (email integration)

📊 Projektikortit animaatioilla

🚀 Deployment (Vercel / Netlify)

👤 Author

Veeti
Frontend Developer
