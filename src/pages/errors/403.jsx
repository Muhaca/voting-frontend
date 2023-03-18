import { Button, Typography } from '@mui/material';
import errorImage from '../../assets/images/403.png';
import { sxErrorPage } from '../../assets/styles/SxErrorPage';

export default function Error403() {
    const sx = sxErrorPage;
    const handleBackHome = () => {
        window.location.replace("/i");
    };
    return (
        <div>
            <img src={errorImage} alt="" />
            <div style={sx.divContent}>
                <Typography sx={sx.textTitle}>You’re not permitted to see this</Typography>
                <Typography sx={sx.textSubTitle}>
                    The page you’re trying to access has restricted access. If you feel this is a mistake contact your admin
                </Typography>
                <div style={sx.divButton}>
                    <Button onClick={handleBackHome} variant="contained" sx={sx.button}>Go to Home</Button>
                </div>
            </div>
        </div>
    );
}