import { Box, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box 
            sx={{
                boxShadow: 5,
                m: 0,
                p: 0,
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '7.5vw',
                position: 'sticky',
                top: 0,
                right: 0,
                width: '100%',
                zIndex: "1000000000",
                backgroundColor: '#39445a',
            }}
        >
            <Typography 
                variant="h2" 
                sx={{ 
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem', xl: '4rem' },
                    letterSpacing: '10px',
                    fontWeight: 'light'
                }}
            >
                ENTERTAINMENT HUB
            </Typography>
        </Box>
    );
};

export default Header;
