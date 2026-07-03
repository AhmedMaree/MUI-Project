import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';

const FEATURE_DATA = [
    { title: "Clean Code", desc: "Built with React and MUI for maximum maintainability.", icon: <CodeIcon color="primary" fontSize="large" /> },
    { title: "Responsive", desc: "Looks perfect on mobile, tablets, and ultra-wide monitors.", icon: <DevicesIcon color="primary" fontSize="large" /> },
    { title: "Fast Delivery", desc: "Pre-built components to speed up your development cycle.", icon: <SpeedIcon color="primary" fontSize="large" /> },
];

const Features = () => {
    return (
        <Container sx={{ py: 10 }}>
            <Grid container spacing={4}>
                {FEATURE_DATA.map((f, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ height: '100%', p: 2, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>{f.icon}</Box>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>{f.title}</Typography>
                                <Typography variant="body1" color="text.secondary">{f.desc}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Features;