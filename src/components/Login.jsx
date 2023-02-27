import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";

export default function Login() {

    const naviate = useNavigate()
    const username = useRef('')
    const password = useRef('')
    const [error, setError] = useState('');

    const handleLogin = () => {
        let user_1 = 'muhammad.udin@gmail.com'
        let pass = 'password'

        if (username.current.value === "") {
            setError('Email belum diisi')
            return
        } else if (password.current.value === "") {
            setError('Password belum diisi')
            return
        } else if (username.current.value !== user_1) {
            setError('Email Salah')
            return
        } else if (password.current.value !== pass) {
            setError('Password Salah')
            return
        }
        else if (username.current.value === user_1 && password.current.value === pass) {
            naviate('/')
        }

        console.log(error);
    }

    return (
        <LoginLayout>
            <Paper elevation={3} sx={{ width: 400, height: 300 }}>
                <Grid display="grid" sx={{ placeItems: 'center', height: '80%' }}>
                    <Typography variant="h5" sx={{ marginTop: 3 }}>DataAktual.com</Typography>
                    <Grid display="grid" sx={{ placeItems: 'center', height: '80%' }}>
                        <TextField
                            size="small"
                            label="Email"
                            name="email"
                            inputRef={username}
                            variant="outlined"
                            sx={{ width: "290px", mb: "25px", backgroundColor: "white" }}
                        />
                        <TextField
                            size="small"
                            type="password"
                            label="Password"
                            name="password"
                            inputRef={password}
                            variant="outlined"
                            sx={{ width: "290px", mb: "25px" }}
                        />
                    </Grid>
                    <Typography sx={{ marginTop: 3, fontSize: 12, paddingBottom: 3, color: 'red' }}>{error}</Typography>
                    <Button variant="contained" onClick={handleLogin} >
                        Login
                    </Button>
                </Grid>
            </Paper>
        </LoginLayout>
    )
}