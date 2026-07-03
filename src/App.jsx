// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Features from './components/Features'

// export default function App() {
//   return (
//     // <ThemeProvider theme={theme}>
//   <CssBaseline />
//   <Navbar />
//   <Box sx={{ minHeight: '100vh' }}>
//     <Hero />
//     <Features />
//   </Box>
// </ThemeProvider>
//   )
// }


// import { ThemeProvider, CssBaseline, Box } from '@mui/material';
// import theme from './Theme';
import Hero from './components/Hero';
import Features from './components/Features';
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default App;