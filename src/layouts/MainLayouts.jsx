import { Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import MainAppBar from "../components/AppBar";

const MainLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <MainAppBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container disableGutters maxWidth="100%" sx={{ background: "#F5F6FA", padding: "20px 12px 0px 12px" }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
};
export default MainLayout;