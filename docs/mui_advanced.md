# Day 2: MUI Advanced Component Implementations

This document covers advanced Material-UI components including data display galleries, autocomplete selections, card panels, drawer panels, rating selections, and customizable inputs.

---

## 📂 Source Code Files

- [BtnCustomize.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/BtnCustomize.jsx)
- [CustomComp.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/CustomComp.jsx)
- [MUiGallary.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MUiGallary.jsx)
- [MuiAutoComplete.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiAutoComplete.jsx)
- [MuiAvatar.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiAvatar.jsx)
- [MuiCard.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiCard.jsx)
- [MuiDrawer.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiDrawer.jsx)
- [MuiRating.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiRating.jsx)
- [MuiSwitch.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D02/MuiSwitch.jsx)

---

## 📝 Features & Component Details

### 1. Image Masonry Gallery (`MUiGallary.jsx`)
- **MUI Components**: `<ImageList>`, `<ImageListItem>`
- **Role**: Renders a visually balanced grid of imagery using varying heights.
- **Implementation**: Binds a mock data array containing Unsplash image links. Uses MUI's built-in `variant="masonry"` with customizable column sizes (`cols={3}`) and dynamic row heights to adjust the gallery layout on the fly.

### 2. Autocomplete Selector (`MuiAutoComplete.jsx`)
- **MUI Components**: `<Autocomplete>`, `<TextField>`
- **Role**: Text input with real-time matching suggestions.
- **State Handling**: Binds an array of technical developer skills (HTML, CSS, JS, React, etc.) to options. Utilizes `useState` and the `onChange` event parameters to store chosen suggestions.

### 3. Avatars & Badges (`MuiAvatar.jsx`)
- **MUI Component**: `<Avatar>`
- **Role**: Displays profile icons and circular text abbreviations.
- **Implementation**: Demonstrates rendering image avatars using custom height/width styles, alongside short letter representations ("NM") styled with background color indicators.

### 4. Card Showcase (`MuiCard.jsx`)
- **MUI Components**: `<Card>`, `<CardMedia>`, `<CardContent>`, `<CardActions>`, `<Button>`
- **Role**: Structured dashboard information layout blocks.
- **Details**: Combines a top image banner (using `<CardMedia component="img">`), rich text content panels with custom typographic headers, and actions layouts with anchor buttons redirecting users.

### 5. Anchor Drawers (`MuiDrawer.jsx`)
- **MUI Components**: `<Drawer>`, `<IconButton>`, `<Box>`
- **Role**: Off-canvas slider panels.
- **Implementation**: Binds state hooks to click actions to open and close sliding drawers. Sets the sliding drawer to slide out from the bottom of the screen (`anchor="bottom"`) and hides elements on close events.

### 6. Heart Rating Selector (`MuiRating.jsx`)
- **MUI Component**: `<Rating>`
- **Role**: Star/heart feedback indicator.
- **Implementation**: Customizes standard stars with SVGs (`FavoriteIcon` and `FavoriteBorderIcon`) and supports half-unit ratings (`precision={0.5}`) linked to React hook states.

### 7. Dark Mode Switch (`MuiSwitch.jsx`)
- **MUI Components**: `<Switch>`, `<FormControlLabel>`
- **Role**: Boolean choice selectors.
- **Implementation**: Demonstrates a toggler component styled as a "Dark mode" switch to update theme configurations reactive to user check events.
