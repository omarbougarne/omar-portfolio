# 💼 Omar Bougarne - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

A modern, responsive portfolio showcasing my work as a fullstack web and mobile developer. Built with React, Vite, and Framer Motion for smooth animations and an engaging user experience.

🌐 **Live Site:** [https://your-portfolio-url.netlify.app](https://your-portfolio-url.netlify.app)

## ✨ Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Lightning-fast performance with Vite
- 🎭 Framer Motion animations for interactive elements
- 💌 Integrated contact form with EmailJS
- 🌙 Syntax-highlighted code display
- 🔗 Direct links to GitHub and LinkedIn

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Animations:** Framer Motion
- **Styling:** CSS3
- **Syntax Highlighting:** React Syntax Highlighter
- **Contact Form:** EmailJS
- **Deployment:** Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone https://github.com/omarbougarne/omar-portfolio.git
cd omar-portfolio
```

2. Install dependencies
```bash
pnpm install
```

3. Create a `.env` file for EmailJS configuration (optional)
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
pnpm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build

To create a production build:

```bash
pnpm run build
```

To preview the production build locally:

```bash
pnpm run preview
```

## 🚢 Deployment

### Netlify (Current)

The site is automatically deployed to Netlify on every push to the main branch.

Manual deployment:
```bash
pnpm run build
netlify deploy --prod
```

### GitHub Pages (Alternative)

To deploy to GitHub Pages:
```bash
pnpm run deploy
```

**Note:** If deploying to GitHub Pages, update `vite.config.js`:
```javascript
base: '/omar-portfolio/'
```

## 📁 Project Structure

```
omar-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── assets/          # Images, icons, etc.
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

### Colors and Styling

Modify the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --background: #your-color;
}
```

### Content

Update the content in each component file to reflect your information:
- **Hero.jsx** - Introduction and tagline
- **About.jsx** - Your background and story
- **Projects.jsx** - Your featured projects
- **Skills.jsx** - Your technical skills
- **Contact.jsx** - Contact information

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to `.env` file
4. Update the EmailJS integration in `Contact.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- 🌐 Portfolio: [your-portfolio-url.netlify.app](https://your-portfolio-url.netlify.app)
- 💼 LinkedIn: [Omar Bougarne](https://www.linkedin.com/in/omar-bougarne-886691327/)
- 🐙 GitHub: [@omarbougarne](https://github.com/omarbougarne)
- 📧 Email: bougarneomardev@gmail.com

## 🙏 Acknowledgments

- Icons from [Font Awesome](https://fontawesome.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Syntax highlighting by [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

---

⭐ If you like this portfolio, feel free to star the repository!

Made with ❤️ by Omar Bougarne