# MUI Theme & Custom Component Styling

This document explains the customization and custom-theming setup of the `nexus-landing` project, showcasing how we configure a custom palette and override component behaviors.

---

## 📂 Source Code Files

- [Theme.js](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/Theme.js)
- [GradientButton.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/GradientButton.jsx)
- [BtnCustomize.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/BtnCustomize.jsx)
- [CustomComp.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/CustomComp.jsx)

---

## 📝 Features & Component Details

### 1. Global Custom Theme (`Theme.js`)
The application defines a custom Material-UI configuration created using `createTheme()` containing:
- **Palette Tokens**:
  - `primary.main`: `#2196F3` (Bright Blue)
  - `primary.dark`: `#1976D2` (Navy Blue)
  - `secondary.main`: `#00BCD4` (Cyan Accent)
  - `background.default`: `#ffffff` (White background)
  - `background.paper`: `#fafafa` (Very light gray panels)
- **Typography Tokens**: Sets the application's font stack to `"Inter", "Roboto", "Helvetica", "Arial"` with custom font weights defined for `h1`, `h2`, and `h5`.
- **Shapes**: Sets global `borderRadius` to `12px` to enforce curved card/button designs.
- **Component Style Overrides**: Overrides the base configuration of all `<Button>` elements globally, disabling default uppercase letter transformation (`textTransform: 'none'`) and setting a default padding.

### 2. Custom Styled Components (`GradientButton.jsx`)
- **API Used**: `styled()` utility from `@mui/material`.
- **Role**: Renders a custom styled button that changes colors dynamically matching theme variables.
- **Design Tokens Used**:
  - **Background Gradient**: Adapts primary and secondary color palette configurations:
    `linear-gradient(45deg, primary.main 30%, secondary.main 90%)`
  - **Shadow Glows**: Creates visual depth using primary color shades:
    `boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'`
  - **Hover Micro-Animations**: Smoothly translates up (`transform: 'translateY(-2px)'`), intensifies shadows, and swaps primary gradient bounds to primary dark on cursor hover.

### 3. Native Elements Styling (`CustomComp.jsx`)
- **API Used**: `styled()` utility from `@mui/system`.
- **Role**: Showcases how to style non-MUI native elements (e.g. HTML `div`) using the CSS-in-JS style object structure.
- **Implementation**: Binds color, background, custom font size, and hover keyframe styles onto a custom styled element (`Mearn_FE`).

### 4. Overriding Sub-Component States (`BtnCustomize.jsx`)
- **API Used**: Nested CSS selectors and system state classes.
- **Role**: Customizes internal MUI button component class overrides directly using the `sx` prop.
- **Targeting**: Targets the disabled state using the built-in state class selector `&.Mui-disabled` to force custom backgrounds (e.g. rendering disabled states with pink highlights instead of standard gray) and overrides generic hover changes.
