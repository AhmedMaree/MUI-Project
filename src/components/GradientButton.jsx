import { Button, styled } from '@mui/material';

const GradientButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 10px 4px rgba(33, 203, 243, .3)',
        background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
    },
}));

export default GradientButton;