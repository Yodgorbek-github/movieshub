import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography variant="h1" color="primary" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" gutterBottom>
            Sahifa Topilmadi
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
            Siz izlayotgan sahifa mavjud emas.
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGoHome}
                >
                    Uyga qayting
                </Button>
            </Box>
        </Container>
    );
}

export default NotFoundPage;
