import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3',
            dark: '#1976D2',
        },
        secondary: {
            main: '#00BCD4',
        },
        background: {
            default: '#ffffff',
            paper: '#fafafa',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 800 },
        h2: { fontWeight: 700 },
        h5: { fontWeight: 500 },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: '8px 24px',
                },
            },
        },
    },
});

export default theme;