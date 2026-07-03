# Landing Page Component Implementations

This document outlines the main landing sections that form the core user interface of the `nexus-landing` application.

---

## 📂 Source Code Files

- [Navbar.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/Navbar.jsx)
- [Hero.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/Hero.jsx)
- [Features.jsx](file:///d:/Courses/ITI%20Frontend%20and%20cross%20platform/18.MUI/MUI/Lab2-final/src/components/Features.jsx)

---

## 📝 Features & Component Details

### 1. Fixed Interactive Header (`Navbar.jsx`)
- **MUI Components**: `<AppBar>`, `<Toolbar>`, `<Typography>`, `<Button>`, `<Box>`, `<IconButton>`, `<Drawer>`, `<List>`, `<ListItem>`, `<Container>`
- **Scroll Trigger Integration**: Employs MUI's `useScrollTrigger()` hook to track scroll heights. Automatically transitions the header background from transparent to a frosted semi-transparent dark shade (`rgba(8, 8, 15, 0.85)`) with a blur backdrop filter (`backdropFilter: 'blur(20px)'`) once users scroll past 40 pixels.
- **Responsive Layout**:
  - **Desktop Screen View**: Displays logo brand details, links array mapping, and a styled contained Call-To-Action button. Uses responsive `display` breakpoints to hide these elements on small views (`display: { xs: 'none', md: 'flex' }`).
  - **Mobile Screen View**: Hides links and displays a menu toggle `<IconButton>` that triggers an off-screen drawer container (`<Drawer anchor="right">`) sliding in from the right edge with navigation lists.

### 2. Main Welcome Header (`Hero.jsx`)
- **MUI Components**: `<Box>`, `<Container>`, `<Typography>`, `<Stack>`, `<Button>`
- **Role**: Visual entry banner for the landing page.
- **Typography & Spacing**:
  - Implements a central responsive header (`h1` component mapping) with font sizes that scale from `2.8rem` on mobile to `4rem` on desktop.
  - Features high-contrast colored text snippets utilizing inline span element tags (`<Box component="span">`).
- **Responsive Stacking Layout**: Renders secondary action buttons inside a layout stack (`<Stack>`) that flips layout direction from vertical on mobile to horizontal on wider screens (`direction={{ xs: 'column', sm: 'row' }}`).

### 3. Responsive Showcase Grid (`Features.jsx`)
- **MUI Components**: `<Container>`, `<Grid>`, `<Card>`, `<CardContent>`, `<Typography>`, `<Box>`
- **Data-Driven List**: Binds feature parameters into a structured array list containing SVG graphic badges (`CodeIcon`, `DevicesIcon`, `SpeedIcon`), header text, and description details.
- **Responsive Layout Grid**: Employs MUI's flexbox-powered `<Grid>` utility to automatically adjust column layouts (rendering 1 feature per row on mobile views, and 3 features per row on desktops with `xs={12} md={4}`).
- **Interactive Card Hover**: Embeds custom hover scale-up transforms (`transform: 'scale(1.02)'`) on feature cards to enhance user engagement.
