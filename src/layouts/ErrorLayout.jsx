import React from "react";
import { Grid } from "@mui/material";

const ErrorLayout = ({ children }) => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh', maxWidth: '100%', backgroundColor: "white" }}
        >
            <Grid item style={{ width: 806 }}>
                {children}
            </Grid>
        </Grid>
    );
};

export default ErrorLayout;