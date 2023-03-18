import { Button, Typography } from '@mui/material';
import errorImage from '../../assets/images/404.png';
import { sxErrorPage } from '../../assets/styles/SxErrorPage';

export default function Error404() {
    const sx = sxErrorPage;
    const handleBackHome = () => {
        window.location.replace("/i");
    };
    return (
        <div>
            <img src={errorImage} alt="" />
            <div style={sx.divContent}>
                <Typography sx={sx.textTitle}>Page not Found</Typography>
                <Typography sx={sx.textSubTitle}>
                    The link you followed is either outdated, onaccurate, or the server has been instructed no to let you have it
                </Typography>
                <div style={sx.divButton}>
                    <Button onClick={handleBackHome} variant="contained" sx={sx.button}>Go to Home</Button>
                </div>
            </div>
        </div>
    );
}