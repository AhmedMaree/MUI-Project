# 📄 CV Project Description: Nexus Landing Page

This document contains professional descriptions of the **Nexus Landing** project, formatted for inclusion in your CV/Resume. It showcases the technical stack, your role as a Frontend Developer, and key achievements that demonstrate expertise in React and Material-UI (MUI) component styling.

---

## 📂 Related Files

- **CV Description Document**: [docs/cv_description.md](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/docs/cv_description.md)

---

## 💼 Option 1: Standard CV Block (Bullet Points)

**Frontend Developer** | **Nexus — Premium Material-UI Landing Platform**
*Technologies: React.js, Vite, Material-UI (MUI) v6, Emotion CSS (styled API), HTML5, CSS3, ES6+, Git*

- **Custom Styling Architecture**: Built premium custom components using MUI’s `@mui/material/styles` (`styled`) utility, incorporating dynamic CSS keyframes, interactive transitions, custom gradients, and soft glow shadows.
- **Responsive Flexbox Grid Layout**: Engineered mobile-first layouts using MUI's `<Grid>` and `<Stack>` components, supporting flexible typography sizes and direction states across multiple viewports (mobile, tablet, desktop).
- **Theme Engine Customization**: Initialized custom Material-UI configurations (`createTheme`) overriding default button shapes, custom border-radii parameters, and primary/secondary color schemes globally.
- **Frosted Backdrop Glassmorphism**: Integrated interactive scroll handlers (`useScrollTrigger`) inside navigation headers to dynamically toggle background glassmorphism blur filters and border lines based on viewport vertical scrolls.
- **Core MUI Exercises Suite**: Crafted an organized laboratory catalog (Day 1 & Day 2) demonstrating mastery of form inputs (Autocomplete, Select, Checked courses lists), feedback interfaces (Precision Heart Ratings), and navigation controls (Slide drawers & Avatars).

---

## 💼 Option 2: Short/Compact Profile Summary (For 1-page CVs)

> **Nexus — Modern Material-UI (MUI) Web Platform**
> *Developed a responsive, interactive landing page utilizing React, Vite, and Material-UI (MUI) v6. Configured custom theme variables, custom styled buttons with linear-gradients, scroll-triggered navigation filters, and a modular library demonstrating core and advanced form components.*

---

## 💼 Option 3: In-Depth Project Case Study (For Portfolios)

### 🌟 Project Objective
Create a modern, responsive showcase portal designed to exhibit basic and advanced features of Material-UI elements, customized using premium styling engines and responsive design principles.

### 🚀 Key Technical Challenges & Solutions
1. **Challenge**: Designing custom components with unique linear-gradient borders, hovering translations, and glows without polluting classes with static CSS files.
   - *Solution*: Leveraged the `@mui/material/styles` CSS-in-JS engine to build a reusable `<GradientButton>` that reads palette keys directly from the theme object and uses transition rules for hover effects.
2. **Challenge**: Managing a fixed header that is transparent on top but remains legible when scrolling over colored media sections.
   - *Solution*: Embedded MUI's `useScrollTrigger()` hook inside `<Navbar>` to monitor viewport scroll states, updating UI filters to apply frosted-glass backgrounds dynamically.
