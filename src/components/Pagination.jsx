import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { IconButton, MenuItem, Select, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const sxPagination = {
    boxArrowButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.25rem',
        gap: '0.125rem',
        width: '1rem',
        height: '1rem',
        background: '#173E55',
        borderRadius: '0.125rem'
    },
    arrowButton: {
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        color: '#FFFFFF'
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.25rem',
        gap: '0.125rem',
        height: '1rem',
    },
    select: {
        width: '4.5rem',
        height: '2rem',
        background: '#FFFFFF',
        border: '1px solid #242424',
        borderRadius: '6px',
    }
};

export default function Pagination(props) {
    const sx = sxPagination;
    const { page, per_page, max_page, data, count, onChangePerPage, onChangePage } = props;
    const [pages, setPerPage] = React.useState(per_page[0]);

    const handleChangePerPage = (e) => {
        onChangePerPage(e);
        setPerPage(e.target.value);
    };

    const handlePrevPage = () => {
        if (page !== 1) {
            onChangePage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < max_page) {
            onChangePage(page + 1);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                >
                    <Grid sx={{ order: { xs: 1, sm: 2 } }}>
                        <Stack direction='row' spacing={2} sx={sx.box}>
                            <Select
                                value={pages}
                                onChange={handleChangePerPage}
                                sx={sx.select}>

                                {per_page.map((pages, index) => {
                                    return (
                                        <MenuItem key={pages + index} value={pages}>{pages}</MenuItem>
                                    );
                                })}
                            </Select>
                            <Typography >Showing <span >{data?.length}</span> of <span>{count}</span></Typography>
                        </Stack>
                    </Grid>
                    <Grid container sx={{ order: { xs: 1, sm: 2 } }}>
                        <Grid>
                            <Box sx={sx.boxArrowButton}>
                                <IconButton
                                    onClick={handlePrevPage}
                                >
                                    <NavigateNextIcon
                                        sx={sx.arrowButton}
                                    />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid>
                            <Typography>{page}</Typography>
                        </Grid>
                        <Grid>
                            <Box sx={sx.boxArrowButton}>
                                <IconButton
                                    onClick={handleNextPage}
                                >
                                    <NavigateBeforeIcon
                                        sx={sx.arrowButton}
                                    />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}