import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, MenuItem, Select, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { sxTabelData } from "../assets/sxTabelData";
import MainLayout from "../layouts/MainLayouts";
import MockData from "../assets/datakecamatan.json"
import axios from "axios";
import { Box } from "@mui/system";

const columns = [
    {
        id: 'tps',
        label: 'TPS',
    },
    {
        id: 'kandidat',
        label: 'Nama Kandidat',
    },
    {
        id: 'kecamatan',
        label: 'Kecamatan',
    },
    {
        id: 'kelurahan',
        label: 'Kelurahan',
    },
    {
        id: 'user',
        label: 'User',
    },
    {
        id: 'gambar',
        label: 'Gambar',
    },
    {
        id: 'jumlah',
        label: 'Jumlah Suara',
    },
    {
        id: 'action',
        label: 'Action',
    },
];
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

function TabelData() {

    const sx = sxTabelData;
    const [voting, setVoting] = useState([]);
    const [getKandidat, setGetKandidat] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [message, setMessage] = useState('');

    //Form Data1
    const [dataKec1, setDataKec1] = useState('');
    const [dataKel1, setDataKel1] = useState('');
    const [kandidat1, setKandidat1] = useState('');
    const nomorTps1 = useRef('')
    const jumlahSuara1 = useRef(0)

    //Form Data2

    const [kandidat2, setKandidat2] = useState('');
    const jumlahSuara2 = useRef(0)

    //Form Data3
    const [kandidat3, setKandidat3] = useState('');
    const jumlahSuara3 = useRef(0)

    useEffect(() => {
        getDataVoting();
    }, []);

    const getDataVoting = async () => {
        const res = await axios.get('http://192.168.122.253:1234/getemployee');
        setVoting(res.data.Data);
    }

    const getDataKandidat = async () => {
        const res = await axios.get('http://192.168.122.253:1234/getkandidat');
        setGetKandidat(res.data.Data);
    }


    const addDataVoting = async (e) => {
        let formData1 = new FormData()
        formData1.append('tps', nomorTps1.current.value)
        formData1.append('kecamatan', dataKec1)
        formData1.append('kelurahan', dataKel1)
        formData1.append('nama', kandidat1)
        formData1.append('jumlah_suara', jumlahSuara1.current.value)
        formData1.append('user', 'Udin')

        let formData2 = new FormData()
        formData2.append('tps', nomorTps1.current.value)
        formData2.append('kecamatan', dataKec1)
        formData2.append('kelurahan', dataKel1)
        formData2.append('nama', kandidat2)
        formData2.append('jumlah_suara', jumlahSuara2.current.value)
        formData2.append('user', 'Udin')

        let formData3 = new FormData()
        formData3.append('tps', nomorTps1.current.value)
        formData3.append('kecamatan', dataKec1)
        formData3.append('kelurahan', dataKel1)
        formData3.append('nama', kandidat3)
        formData3.append('jumlah_suara', jumlahSuara3.current.value)
        formData3.append('user', 'Udin')

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        await axios.post(
            'http://192.168.122.253:1234/insertemployee', formData1, config
        ).then(response => {
            setMessage("Data Berhasil disimpan")
            setOpenMessage(true)
        })
            .catch(error => {
                setMessage("Data Gagal disimpan")
                setOpenMessage(true)
            });

        await axios.post(
            'http://192.168.122.253:1234/insertemployee', formData2, config
        ).then(response => {
            setMessage("Data Berhasil disimpan")
            setOpenMessage(true)
        })
            .catch(error => {
                setMessage("Data Gagal disimpan")
                setOpenMessage(true)
            });

        await axios.post(
            'http://192.168.122.253:1234/insertemployee', formData3, config
        ).then(response => {
            setMessage("Data Berhasil disimpan")
            setOpenMessage(true)
        })
            .catch(error => {
                setMessage("Data Gagal disimpan")
                setOpenMessage(true)
            });
    }

    return (
        <MainLayout>
            <div style={sx.container}>
                <TableContainer sx={{ height: "100%", maxHeight: 500 }}>
                    <Button
                        size="medium"
                        variant="contained"
                        color="warning"
                        sx={{ textTransform: "none", marginBottom: 2 }}
                        onClick={() => setOpenModal(true)}
                    >Tambah Data Suara Baru</Button>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((rows) => {
                                    return (
                                        <TableCell
                                            key={rows.id}
                                            sx={rows.id === "action" ? { ...sx.tableCellAction } : sx.tableCelHead}>
                                            {rows.label}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {voting === null ? null :
                                voting.map((values, index) => {
                                    return (
                                        <TableRow key={index}>
                                            {columns.map((rows) => {
                                                return (
                                                    <TableCell
                                                        key={rows.id}
                                                        sx={sx.tableCellBody}>
                                                        {rows.id === 'kandidat' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.nama}</Typography>
                                                        }
                                                        {rows.id === 'kecamatan' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.Kecamatan}</Typography>
                                                        }
                                                        {rows.id === 'kelurahan' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.kelurahan}</Typography>
                                                        }
                                                        {rows.id === 'user' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.User}</Typography>
                                                        }
                                                        {rows.id === 'gambar' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.gambar}</Typography>
                                                        }
                                                        {rows.id === 'jumlah' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.JumlahSuara}</Typography>
                                                        }
                                                        {rows.id === 'tps' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.tps}</Typography>
                                                        }
                                                        {rows.id === 'action' &&
                                                            <Button sx={{ width: '100%', justifyContent: 'center' }} size="small" variant="contained" color="success">Edit</Button>
                                                        }
                                                    </TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenModal(false)}
                PaperProps={{
                    style: { ...sx.dialogCredit }
                }}
            >
                <DialogTitle sx={sx.textDialogTitle}>{"Form Data"}</DialogTitle>
                <DialogContent>
                    <Grid sx={{ marginTop: 2 }}>
                        <Box sx={{ border: '1px solid #7D8D9E', padding: 3 }}>
                            <TextField
                                label="Nomor TPS"
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}
                                inputRef={nomorTps1}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Typography sx={sx.textCellBlack1}>Kecamatan</Typography>
                            <Select
                                value={dataKec1}
                                onChange={(e) => setDataKec1(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {MockData.map((value, index) => (
                                    <MenuItem key={index} value={value.kecamatan} >{value.kecamatan}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={sx.textCellBlack1}>Kelurahan</Typography>
                            <Select
                                label="Pilih Kecamatan"
                                value={dataKel1}
                                onChange={(e) => setDataKel1(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {MockData.map((value, index) => (
                                    <MenuItem key={index} value={value.kelurahan}>{value.kelurahan}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={sx.textCellBlack1}>Kandidat</Typography>
                            <Select
                                onOpen={getDataKandidat}
                                value={kandidat1}
                                onChange={(e) => setKandidat1(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {getKandidat.map((value, index) => (
                                    <MenuItem key={index} value={value.nama}>{value.nama}</MenuItem>
                                ))}
                            </Select>
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara1}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat</Typography>
                            <Select
                                onOpen={getDataKandidat}
                                value={kandidat2}
                                onChange={(e) => setKandidat2(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {getKandidat.map((value, index) => (
                                    <MenuItem key={index} value={value.nama}>{value.nama}</MenuItem>
                                ))}
                            </Select>
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara2}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat</Typography>
                            <Select
                                onOpen={getDataKandidat}
                                value={kandidat3}
                                onChange={(e) => setKandidat3(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {getKandidat.map((value, index) => (
                                    <MenuItem key={index} value={value.nama}>{value.nama}</MenuItem>
                                ))}
                            </Select>
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara3}
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
                        onClick={() => setOpenModal(false)}
                        sx={{ width: "100%" }}>
                        Batal
                    </Button>
                    <Button
                        color="warning"
                        variant="contained"
                        onClick={() => { addDataVoting(); setOpenModal(false) ; getDataVoting()}}
                        sx={{ width: "100%" }}>
                        Simpan
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <MessageSnackbar
                open={openMessage}
                close={() => setOpenMessage(false)}
                message={message}
            /> */}
        </MainLayout>
    );
}

export default TabelData;