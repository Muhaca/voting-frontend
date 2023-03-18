import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Slide, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AddKandidatAPIRequest } from "../integrations/ApiAddKandidat";
import MainLayout from "../layouts/MainLayouts";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const sx = {
    container: {
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px 14px",
        gap: "10px"
    },
    gridLogoRoot: {
        justifyContent: 'center',
        alignItems: "center",
        flexGrow: 1,
    },
    logoContainer: {
        display: 'grid',
        width: '50%',
        height: 300,
        placeItems: 'center',
    },
    iconButton: {
        backgroundColor: 'transparent',
        '&:hover': {
            border: '3px solid #F68833',
            borderRadius: 4,
        },
        width: '80%',
        height: '50%',
        borderRadius: 4,
        boxShadow: '1px 2px 9px #e3dad1'
    },
    textLogoApps: {
        fontSize: 30,
        fontWeight: 800,
        textAlign: 'center',
        background:
            '-webkit-linear-gradient(179deg, #F3B700, #DC493A)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    textDialogTitle: {
        fontSize: "18px",
        fontWeight: "700",
        color: "black"
    },
    textCellBlack1: {
        fontSize: "12px",
        fontWeight: "400",
        color: "black"
    },
    textKandidate: {
        width: '100%',
        marginBottom: 2,
        fontSize: 12,
        "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
        },
    },
    dialogAction: {
        justifyContent: "space-between",
        marginBottom: "10px",
        gap: 2,
        padding: 3
    },
};

function Added() {

    const [openAddUser, setOpenAddUser] = useState(false);
    const [openAddKandidat, setOpenAddKandidat] = useState(false);
    const [nama, setNama] = useState('');
    const [userId, setUserId] = useState('');

    const AddKandidat = async () => {
        let req = new AddKandidatAPIRequest();
        req.setNama(nama);
        req.setUserId(parseFloat(userId));

        await req.fetch();
        setOpenAddKandidat(false);
    };

    return (
        <MainLayout>
            <div style={sx.container}>
                <Grid container sx={sx.gridLogoRoot}>
                    <Grid item sx={sx.logoContainer}>
                        <IconButton
                            onClick={() => setOpenAddUser(true)}
                            sx={sx.iconButton}>
                            <Typography sx={sx.textLogoApps}>ADD USER</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item sx={sx.logoContainer}>
                        <IconButton
                            onClick={() => setOpenAddKandidat(true)}
                            sx={sx.iconButton}>
                            <Typography sx={sx.textLogoApps}>ADD KANDIDAT</Typography>
                        </IconButton>
                    </Grid>
                </Grid>

                {/* Form Add User */}
                <Dialog
                    open={openAddUser}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setOpenAddUser(false)}
                    PaperProps={{
                        style: { ...sx.dialogCredit }
                    }}
                >
                    <DialogTitle sx={sx.textDialogTitle}>{"Form Add User"}</DialogTitle>
                    <DialogContent>
                        <Grid sx={{ marginTop: 2 }}>
                            <Box sx={{ border: '1px solid #7D8D9E', padding: 3 }}>
                                <TextField
                                    label="Nama Lengkap"
                                    size="small"
                                    sx={{ width: '100%', marginBottom: 2 }}
                                    // value={nomorTps}
                                    // onChange={(e) => setNomorTps(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 12
                                        }
                                    }}
                                />
                                <TextField
                                    label="Email"
                                    size="small"
                                    sx={{ width: '100%', marginBottom: 2 }}
                                    // value={nomorTps}
                                    // onChange={(e) => setNomorTps(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 12
                                        }
                                    }}
                                />
                                <TextField
                                    label="Password"
                                    size="small"
                                    type="password"
                                    sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                    name="jumlah_suara_1"
                                    // value={state.jumlah_suara_1 || ''}
                                    // onChange={handleChangeValue}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 12
                                        }
                                    }}
                                />
                                <TextField
                                    label="Konfirmasi Password"
                                    size="small"
                                    type="password"
                                    sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                    name="jumlah_suara_1"
                                    // value={state.jumlah_suara_1 || ''}
                                    // onChange={handleChangeValue}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 12
                                        }
                                    }}
                                />
                            </Box>
                        </Grid>
                    </DialogContent>
                    <DialogActions sx={sx.dialogAction}>
                        <Button
                            color="warning"
                            variant="outlined"
                            onClick={() => setOpenAddUser(false)}
                            sx={{ width: "100%" }}>
                            Batal
                        </Button>
                        <Button
                            // disabled={
                            //     !state.jumlah_suara_1 || !dataKec || !dataKel || !nomorTps || !dataPhoto
                            //         ? true : false
                            // }
                            color="warning"
                            variant="contained"
                            // onClick={editDataVoting}
                            sx={{ width: "100%" }}>
                            Simpan
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Form Add Kandidat */}
                <Dialog
                    open={openAddKandidat}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setOpenAddKandidat(false)}
                    PaperProps={{
                        style: { ...sx.dialogCredit }
                    }}
                >
                    <DialogTitle sx={sx.textDialogTitle}>{"Form Add Kandidat"}</DialogTitle>
                    <DialogContent>
                        <Grid sx={{ marginTop: 2 }}>
                            <Box sx={{ border: '1px solid #7D8D9E', padding: 3 }}>
                                <TextField
                                    label="Nama Lengkap"
                                    size="small"
                                    sx={{ width: '100%', marginBottom: 2 }}
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 12
                                        }
                                    }}
                                />
                                <TextField
                                    label="User ID"
                                    size="small"
                                    type="number"
                                    sx={{ width: '100%', marginBottom: 2 }}
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 12
                                        }
                                    }}
                                />
                            </Box>
                        </Grid>
                    </DialogContent>
                    <DialogActions sx={sx.dialogAction}>
                        <Button
                            color="warning"
                            variant="outlined"
                            onClick={() => setOpenAddKandidat(false)}
                            sx={{ width: "100%" }}>
                            Batal
                        </Button>
                        <Button
                            // disabled={
                            //     !state.jumlah_suara_1 || !dataKec || !dataKel || !nomorTps || !dataPhoto
                            //         ? true : false
                            // }
                            color="warning"
                            variant="contained"
                            onClick={AddKandidat}
                            sx={{ width: "100%" }}>
                            Simpan
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </MainLayout>
    );
}
export default Added;