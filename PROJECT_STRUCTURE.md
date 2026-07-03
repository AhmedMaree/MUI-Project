# MUI Project Structure & Features

This document provides a comprehensive overview of the **MUI Lab2-Final (Nexus Landing)** application's directory structure and links to detailed implementation notes for each of the core features.

---

## 🗂 Directory Layout

Below is the directory tree of the project. Click on any file to open it directly in the editor:

```
Lab2-final/
├── index.html                   # HTML Entry template
├── vite.config.js               # Vite compilation and tooling configurations
├── package.json                 # Project dependencies and script commands
├── eslint.config.js             # ESLint configuration rules
├── .gitignore                   # Git ignore rules
└── src/
    ├── main.jsx                 # Entry point wrapped in ThemeProvider and CssBaseline
    ├── App.jsx                  # Main application structure rendering Navbar, Hero, and Features
    ├── App.css                  # Core application styles
    ├── index.css                # Base CSS configurations (loads DM Serif Display and DM Sans)
    ├── Theme.js                 # Custom Material-UI theme configurations
    └── components/
        ├── Navbar.jsx           # Fixed navigation header with mobile drawer
        ├── Hero.jsx             # Hero section with primary actions
        ├── Features.jsx         # Card showcase grid with hover effects
        ├── GradientButton.jsx   # Reusable styled button with linear gradients
        ├── D01/                 # Day 1: Basic MUI Component Lab Examples
        │   ├── MuiBox.jsx       # Layout sections using Box Flexbox styling
        │   ├── MuiButtons.jsx   # Icon buttons, Button groups, and Toggle states
        │   ├── MuiCheckbox.jsx  # Checked skill lists using array hooks
        │   ├── MuiInputs.jsx    # Text field input style variants
        │   ├── MuiRadio.jsx     # Radio list inputs with state handlers
        │   ├── MuiSelect.jsx    # Multiline text areas and selection lists
        │   ├── MuiStack.jsx     # 1D stack containers separated by dividers
        │   └── MuiTypography.jsx# Typography elements and text styles
        └── D02/                 # Day 2: Advanced MUI Component Lab Examples
            ├── BtnCustomize.jsx # Overriding sub-component disabled classes
            ├── CustomComp.jsx   # Styling native HTML tags using styled-components
            ├── MUiGallary.jsx   # Image masonry layout grids
            ├── MuiAutoComplete.jsx# Reactive input selectors with dynamic suggestions
            ├── MuiAvatar.jsx    # User profile photos and text abbreviations
            ├── MuiCard.jsx      # Card grids with image media and actions
            ├── MuiDrawer.jsx    # Bottom anchor sliding drawers
            ├── MuiRating.jsx    # Heart ratings with custom icons
            └── MuiSwitch.jsx    # Boolean state switches (Dark Mode example)
```

---

## 🚀 Key Features Implementation Details

For in-depth explanations on how each feature is structured, which APIs are utilized, and how styling flows through the application, refer to the following feature-specific documentation:

1. 🌍 **[Main Landing Page](./docs/landing_page.md)**
   - Custom layouts featuring interactive, responsive navigation headers.
   - Glassmorphism transitions bound to viewport scroll events.
   - Flexbox grids responsive across viewports (mobile, tablet, desktop).

2. 🎨 **[Theme Customization & Component Styling](./docs/theme_customization.md)**
   - Custom configurations (`createTheme`) overriding typography rules and palette colors.
   - Custom styled components constructed using MUI's nested `styled()` CSS-in-JS utility.
   - Element level overrides targeting default state classes (e.g., custom disabled colors).

3. 🛠️ **[Day 1: Basic MUI Components](./docs/mui_basics.md)**
   - Responsive flexbox containers (`Box`) and stacked layout structures (`Stack`).
   - Standard forms control elements (Checkboxes, Radios, Select inputs).
   - Typography mappings for headers and text blocks.

4. 🚀 **[Day 2: Advanced MUI Components](./docs/mui_advanced.md)**
   - Autocomplete inputs with reactive suggestion matching.
   - Multi-image Masonry gallery layouts.
   - Sliding menu panels (`Drawer`) and feedback scales (`Rating` hearts).

---

## 📄 Source Files Quick Reference

- **Core App Entry & Routing**:
  - React Main Wrapper: [src/main.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/main.jsx)
  - Main App Layout: [src/App.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/App.jsx)
- **Theme & Styles**:
  - Theme Settings: [src/Theme.js](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/Theme.js)
  - Base Layout Styles: [src/index.css](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/index.css)
- **Landing Core Components**:
  - Navigation: [src/components/Navbar.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/Navbar.jsx)
  - Hero Header: [src/components/Hero.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/Hero.jsx)
  - Feature Cards: [src/components/Features.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/Features.jsx)
  - Styled Gradient Button: [src/components/GradientButton.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/GradientButton.jsx)
- **Day 1 Labs (MUI Basics)**:
  - Box Container: [src/components/D01/MuiBox.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiBox.jsx)
  - Buttons Suite: [src/components/D01/MuiButtons.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiButtons.jsx)
  - Checked Skills List: [src/components/D01/MuiCheckbox.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiCheckbox.jsx)
  - Input Variations: [src/components/D01/MuiInputs.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiInputs.jsx)
  - Radio Selectors: [src/components/D01/MuiRadio.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiRadio.jsx)
  - Selector List: [src/components/D01/MuiSelect.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiSelect.jsx)
  - Divided Stacks: [src/components/D01/MuiStack.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiStack.jsx)
  - Typography Mappings: [src/components/D01/MuiTypography.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiTypography.jsx)
- **Day 2 Labs (MUI Advanced)**:
  - Custom Buttons: [src/components/D02/BtnCustomize.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/BtnCustomize.jsx)
  - Styled Tag Wrappers: [src/components/D02/CustomComp.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/CustomComp.jsx)
  - Masonry Image Gallery: [src/components/D02/MUiGallary.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MUiGallary.jsx)
  - Autocomplete Input: [src/components/D02/MuiAutoComplete.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiAutoComplete.jsx)
  - User Avatars: [src/components/D02/MuiAvatar.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiAvatar.jsx)
  - Details Card: [src/components/D02/MuiCard.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiCard.jsx)
  - Anchor Drawer Slider: [src/components/D02/MuiDrawer.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiDrawer.jsx)
  - Heart Rating Scales: [src/components/D02/MuiRating.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiRating.jsx)
  - Theme Switch Toggles: [src/components/D02/MuiSwitch.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiSwitch.jsx)
