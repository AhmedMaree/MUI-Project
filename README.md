# Nexus Landing Page

A beautiful, responsive landing page built with **React + MUI (Material UI)**.

## Tech Stack
- React 18
- MUI v6 (Material UI)
- Vite
- Google Fonts (DM Serif Display + DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
nexus-landing/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── theme.js          # MUI custom theme
    └── components/
        ├── Navbar.jsx    # Sticky navbar with mobile drawer
        ├── Hero.jsx      # Hero section with stats
        ├── Features.jsx  # Feature cards grid
        ├── Testimonials.jsx  # Testimonial cards
        ├── CTA.jsx       # Call-to-action section
        └── Footer.jsx    # Footer with links
```

## Customization

### Colors
Edit `src/theme.js` to change the color palette:
- `primary.main` — Teal accent (#00E5C3)
- `secondary.main` — Amber accent (#F5A623)
- `background.default` — Page background (#08080F)

### Content
Each section component has its own data array at the top of the file — 
edit those to update text, icons, and testimonials.

### Fonts
Fonts are loaded in `index.html`. Replace the Google Fonts link and 
update font references in `theme.js` to change typography.# MUI-Project
