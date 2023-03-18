import { Button, Typography } from '@mui/material';
import errorImage from '../../assets/images/400.png';
import { sxErrorPage } from '../../assets/styles/SxErrorPage';

export default function Error400() {
    const sx = sxErrorPage;
    const handleBackHome = () => {
        window.location.replace("/i");
    };
    return (
        <div>
            <img src={errorImage} alt="" />
            <div style={sx.divContent}>
                <Typography sx={sx.textTitle}>Bad Request</Typography>
                <Typography sx={sx.textSubTitle}>
                    Your request resulted in an error
                </Typography>
                <div style={sx.divButton}>
                    <Button onClick={handleBackHome} variant="contained" sx={sx.button}>Go to Home</Button>
                </div>
            </div>
        </div>
    );
}