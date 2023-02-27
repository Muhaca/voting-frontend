import React from "react";
import { Grid } from "@mui/material";

const LoginLayout = ({ children }) => {
    return (
        <Grid
            container
            justify="center"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh', maxWidth: '100%', backgroundColor: "#f3f3f3" }}
        >
            <Grid item style={{ width: 400 }}>
                {children}
            </Grid>
        </Grid>
    );
};

export default LoginLayout;