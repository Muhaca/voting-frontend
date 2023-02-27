import * as React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

export default function MessageSnackbar(props) {

    const { open, message, close } = props;

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={close}
            >
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={close}
            message={message}
            action={action}
        />
    );
}

MessageSnackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
};