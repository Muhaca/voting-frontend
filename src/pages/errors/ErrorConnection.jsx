import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import errorImage from '../../assets/images/error-connection.png';
import { sxErrorPage } from '../../assets/styles/SxErrorPage';

export default function ErrorConnection() {
    const sx = sxErrorPage;
    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate("/assign");
    };
    return (
        <div>
            <img src={errorImage} alt="" />
            <div style={sx.divContent}>
                <Typography sx={sx.textTitle}>Error Connection</Typography>
                <Typography sx={sx.textSubTitle}>
                    An error has occured, please check your connection and try again later
                </Typography>
                <div style={sx.divButton}>
                    <Button onClick={handleBackHome} variant="contained" sx={sx.button}>Go to Home</Button>
                </div>
            </div>
        </div>
    );
}