import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import GradientButton from './GradientButton';

const Hero = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 15 }, textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2.8rem', md: '4rem' } }}>
                    Design Your Future <br />
                    <Box component="span" sx={{ color: 'primary.main' }}>With Precision</Box>
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                    The ultimate platform for developers and designers to build
                    responsive, high-performance web applications.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                    <GradientButton size="large">Get Started Free</GradientButton>
                    <Button variant="outlined" size="large" color="primary">
                        View Components
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;