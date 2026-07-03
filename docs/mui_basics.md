# Day 1: MUI Basics Component Implementations

This document details the first set of exercises focusing on core Material-UI layout containers, form components, and typography.

---

## 📂 Source Code Files

- [MuiBox.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiBox.jsx)
- [MuiButtons.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiButtons.jsx)
- [MuiCheckbox.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiCheckbox.jsx)
- [MuiInputs.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiInputs.jsx)
- [MuiRadio.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiRadio.jsx)
- [MuiSelect.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiSelect.jsx)
- [MuiStack.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiStack.jsx)
- [MuiTypography.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/D01/MuiTypography.jsx)

---

## 📝 Features & Component Details

### 1. Box Container (`MuiBox.jsx`)
- **MUI Component**: `<Box>`
- **Role**: Serves as a wrapper component that renders as a HTML `section` element.
- **Styling**: Utilizes the `sx` prop to apply responsive CSS Flexbox styles directly (`display: "flex"`, `justifyContent: "space-between"`).

### 2. Buttons & Button Toggles (`MuiButtons.jsx`)
- **MUI Components**: `<Button>`, `<ButtonGroup>`, `<IconButton>`, `<ToggleButton>`, `<ToggleButtonGroup>`
- **Role**: Showcases user actions, grouped buttons, and state-controlled toggling.
- **State Handling**: Uses React's `useState` hook to keep track of toggled states (e.g., Bold, Italic, Normal) inside a `<ToggleButtonGroup>` with a custom `onChange` handler.
- **Customizations**: Contains commented examples of buttons with icons (`startIcon`, `endIcon`), custom variants (`text`, `contained`, `outlined`), standard sizes (`small`, `medium`, `large`), and ripple/elevation disabling.

### 3. Course Checkboxes (`MuiCheckbox.jsx`)
- **MUI Components**: `<FormControl>`, `<FormLabel>`, `<FormControlLabel>`, `<Checkbox>`
- **Role**: Multi-choice selection for skills or courses (HTML, CSS, JS).
- **State Handling**: Manages a dynamically updated list of checked elements using an array state hook `skills` (`useState([])`).
- **Logic**: Filters out existing elements or spreads new values into the state array on check/uncheck events.

### 4. Text Input Variants (`MuiInputs.jsx`)
- **MUI Components**: `<TextField>`, `<Stack>`
- **Role**: Demonstrates standard text input styling configurations.
- **Variants**: Renders the three primary style themes side-by-side in a horizontal layout:
  - `outlined` (default border-box)
  - `filled` (background highlight)
  - `standard` (bottom line border)

### 5. Radio Buttons (`MuiRadio.jsx`)
- **MUI Components**: `<FormControl>`, `<FormLabel>`, `<RadioGroup>`, `<FormControlLabel>`, `<Radio>`
- **Role**: Single-choice selection for years of experience (0-2, 3-5, 6-8).
- **State Handling**: Tracks the current selected value via state variables with real-time logs.

### 6. Dropdowns & Select Inputs (`MuiSelect.jsx`)
- **MUI Components**: `<TextField>`, `<MenuItem>`
- **Role**: Text areas and dropdown listings.
- **Structure**: Includes a multiline `<TextField>` setting (`rows={5}`) and outlines structural setup for multi-value select pickers with custom `slotProps` inputs.

### 7. Layout Stacks (`MuiStack.jsx`)
- **MUI Components**: `<Stack>`, `<Divider>`
- **Role**: Linear 1D layout organizer.
- **Styling**: Implements a horizontal line layout (`direction="row"`) spaced with default spacing indices (`spacing={5}`) separated dynamically using a vertical divider element (`divider={<Divider orientation="vertical" flexItem />}`).

### 8. Typography Engine (`MuiTypography.jsx`)
- **MUI Component**: `<Typography>`
- **Role**: Centralized system typography rendering.
- **Features**:
  - Displays variant mappings (`h1` through `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `button`, `caption`, `overline`).
  - Implements custom theme color overrides (`color="error"`).
  - Demonstrates local inline overrides utilizing `sx` props (e.g. background color mapping, custom transitions, and hover properties).
  - Changes semantic underlying markup using the `component` property (e.g., rendering a header with `h1` variant look but as a semantic `h4` tag).
