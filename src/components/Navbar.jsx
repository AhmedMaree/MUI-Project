import { useState } from 'react'
import {
    AppBar, Toolbar, Typography, Button, Box, IconButton,
    Drawer, List, ListItem, ListItemText, useScrollTrigger,
    Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const navLinks = ['Features', 'Pricing', 'Testimonials', 'Blog']

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 40,
    })

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: scrolled
                        ? 'rgba(8,8,15,0.85)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ py: 1 }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: '"DM Serif Display", serif',
                                    color: 'text.primary',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                Nexus
                            </Typography>
                        </Box>

                        {/* Desktop Nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button
                                    key={link}
                                    sx={{
                                        color: 'text.secondary',
                                        '&:hover': { color: 'text.primary', background: 'transparent' },
                                    }}
                                >
                                    {link}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ ml: 2 }}
                            >
                                Get Started Free
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            sx={{ display: { md: 'none' }, color: 'text.primary' }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        background: '#10101C',
                        p: 2,
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map((link) => (
                        <ListItem key={link} onClick={() => setDrawerOpen(false)} sx={{ cursor: 'pointer' }}>
                            <ListItemText
                                primary={link}
                                primaryTypographyProps={{ color: 'text.primary', fontWeight: 500 }}
                            />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ mt: 2, px: 2 }}>
                    <Button variant="contained" color="primary" fullWidth>
                        Get Started Free
                    </Button>
                </Box>
            </Drawer>
        </>
    )
}