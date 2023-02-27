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
    const [openModal, setOpenModal] = useState(false);
    const [dataKecamatan, setDataKecamatan] = useState([]);
    const [dataKelurahan, setDataKelurahan] = useState([]);
    const [disBut, setDisBut] = useState(true);


    //Form Data1
    const [dataKec1, setDataKec1] = useState('');
    const [dataKel1, setDataKel1] = useState('');
    const nomorTps1 = useRef('')
    const jumlahSuara1 = useRef(0)
    //Form Data2
    const jumlahSuara2 = useRef(0)
    //Form Data3
    const jumlahSuara3 = useRef(0)
    //Form Data4
    const jumlahSuara4 = useRef(0)
    //Form Data5
    const jumlahSuara5 = useRef(0)
    //Form Data2
    const jumlahSuara6 = useRef(0)
    //Form Data3
    const jumlahSuara7 = useRef(0)
    //Form Data4
    const jumlahSuara8 = useRef(0)
    //Form Data5
    const jumlahSuara9 = useRef(0)
    //Form Data5
    const jumlahSuara10 = useRef(0)

    useEffect(() => {
        getDataVoting();
    }, []);

    const getDataVoting = async () => {
        const res = await axios.get('http://127.0.0.1:1234/getemployee');
        setVoting(res.data.Data);
    }

    // const getDataKandidat = async () => {
    //     const res = await axios.get('http://127.0.0.1:1234/getkandidat');
    //     setGetKandidat(res.data.Data);
    // }

    const getKecamatan = async () => {
        const res = await axios.get('http://127.0.0.1:1234/getkecamatan');
        setDataKecamatan(res.data.Data)
    }

    const getdataKelurahan = async () => {
        let param = dataKec1
        const res = await axios.get('http://127.0.0.1:1234/getkelurahan?kecamatan=' + param);
        setDataKelurahan(res.data)
    }


    const addDataVoting = async (e) => {

        let formData1 = new FormData()
        formData1.append('tps', nomorTps1.current.value)
        formData1.append('kecamatan', dataKec1)
        formData1.append('kelurahan', dataKel1)
        formData1.append('nama', 'adi')
        formData1.append('jumlah_suara', jumlahSuara1.current.value)
        formData1.append('user', 'Udin')

        let formData2 = new FormData()
        formData2.append('tps', nomorTps1.current.value)
        formData2.append('kecamatan', dataKec1)
        formData2.append('kelurahan', dataKel1)
        formData2.append('nama', "jenda")
        formData2.append('jumlah_suara', jumlahSuara2.current.value)
        formData2.append('user', 'Udin')

        let formData3 = new FormData()
        formData3.append('tps', nomorTps1.current.value)
        formData3.append('kecamatan', dataKec1)
        formData3.append('kelurahan', dataKel1)
        formData3.append('nama', "luna")
        formData3.append('jumlah_suara', jumlahSuara3.current.value)
        formData3.append('user', 'Udin')

        let formData4 = new FormData()
        formData4.append('tps', nomorTps1.current.value)
        formData4.append('kecamatan', dataKec1)
        formData4.append('kelurahan', dataKel1)
        formData4.append('nama', 'bambang')
        formData4.append('jumlah_suara', jumlahSuara4.current.value)
        formData4.append('user', 'Udin')

        let formData5 = new FormData()
        formData5.append('tps', nomorTps1.current.value)
        formData5.append('kecamatan', dataKec1)
        formData5.append('kelurahan', dataKel1)
        formData5.append('nama', "asep kurniawan")
        formData5.append('jumlah_suara', jumlahSuara5.current.value)
        formData5.append('user', 'Udin')

        let formData6 = new FormData()
        formData6.append('tps', nomorTps1.current.value)
        formData6.append('kecamatan', dataKec1)
        formData6.append('kelurahan', dataKel1)
        formData6.append('nama', "sitri badria")
        formData6.append('jumlah_suara', jumlahSuara6.current.value)
        formData6.append('user', 'Udin')


        let formData7 = new FormData()
        formData7.append('tps', nomorTps1.current.value)
        formData7.append('kecamatan', dataKec1)
        formData7.append('kelurahan', dataKel1)
        formData7.append('nama', "rieke diah pitaloka")
        formData7.append('jumlah_suara', jumlahSuara7.current.value)
        formData7.append('user', 'Udin')

        let formData8 = new FormData()
        formData8.append('tps', nomorTps1.current.value)
        formData8.append('kecamatan', dataKec1)
        formData8.append('kelurahan', dataKel1)
        formData8.append('nama', "budi")
        formData8.append('jumlah_suara', jumlahSuara8.current.value)
        formData8.append('user', 'Udin')

        let formData9 = new FormData()
        formData9.append('tps', nomorTps1.current.value)
        formData9.append('kecamatan', dataKec1)
        formData9.append('kelurahan', dataKel1)
        formData9.append('nama', 'sumanto')
        formData9.append('juvaluemlah_suara', jumlahSuara9.current.value)
        formData9.append('user', 'Udin')

        let formData10 = new FormData()
        formData10.append('tps', nomorTps1.current.value)
        formData10.append('kecamatan', dataKec1)
        formData10.append('kelurahan', dataKel1)
        formData10.append('nama', "ridho")
        formData10.append('jumlah_suara', jumlahSuara10.current.value)
        formData10.append('user', 'Udin')


        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData1, config
        ).then(response => {
        })
            .catch(error => {

            });

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData2, config
        ).then(response => {

        })
            .catch(error => {

            });

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData3, config
        ).then(response => {

        })
            .catch(error => {

            });
        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData4, config
        ).then(response => {

        })
            .catch(error => {

            });

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData5, config
        ).then(response => {

        })
            .catch(error => {

            });

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData6, config
        ).then(response => {

        })
            .catch(error => {

            });
        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData7, config
        ).then(response => {

        })
            .catch(error => {

            });

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData8, config
        ).then(response => {

        })
            .catch(error => {

            });

        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData9, config
        ).then(response => {

        })
            .catch(error => {

            });
        await axios.post(
            'http://127.0.0.1:1234/insertemployee', formData10, config
        ).then(response => {

        })
            .catch(error => {

            });
    }

    const disableButtun = () => {
        if (jumlahSuara1.current === 0) {
            setDisBut(true)
        } else
            if (jumlahSuara2.current === 0) {
                setDisBut(true)
            } else
                if (jumlahSuara3.current === 0) {
                    setDisBut(true)
                } else
                    if (jumlahSuara4.current === 0) {
                        setDisBut(true)
                    } else
                        if (jumlahSuara5.current === 0) {
                            setDisBut(true)
                        } else
                            if (jumlahSuara6.current === 0) {
                                setDisBut(true)
                            } else
                                if (jumlahSuara7.current === 0) {
                                    setDisBut(true)
                                } else
                                    if (jumlahSuara8.current === 0) {
                                        setDisBut(true)
                                    } else
                                        if (jumlahSuara9.current === 0) {
                                            setDisBut(true)
                                        } else
                                            if (jumlahSuara10.current === 0) {
                                                setDisBut(true)
                                            } else {
                                                setDisBut(false)
                                            }
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
                                onOpen={getKecamatan}
                                value={dataKec1}
                                onChange={(e) => setDataKec1(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {dataKecamatan.map((value, index) => (
                                    <MenuItem key={index} value={value.kecamatan} >{value.kecamatan}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={sx.textCellBlack1}>Kelurahan</Typography>
                            <Select
                                onOpen={getdataKelurahan}
                                value={dataKel1}
                                onChange={(e) => setDataKel1(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {dataKelurahan.map((value, index) => (
                                    <MenuItem key={index} value={value.kelurahan}>{value.kelurahan}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={sx.textCellBlack1}>Kandidat 1</Typography>
                            <TextField
                                defaultValue="adi"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
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
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 2</Typography>
                            <TextField
                                defaultValue="jenda"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
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
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 3</Typography>
                            <TextField
                                defaultValue="luna"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
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
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 4</Typography>
                            <TextField
                                defaultValue="bambang"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara4}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 5</Typography>
                            <TextField
                                defaultValue="asep kurniawan"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara5}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 6</Typography>
                            <TextField
                                defaultValue="sitri badria"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara6}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 7</Typography>
                            <TextField
                                defaultValue="rieke diah pitaloka"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara7}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 8</Typography>
                            <TextField
                                defaultValue="budi"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara8}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 9</Typography>
                            <TextField
                                defaultValue="sumanto"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara9}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Divider />
                            <Typography sx={{ ...sx.textCellBlack1, marginTop: 2 }}>Kandidat 10</Typography>
                            <TextField
                                defaultValue="ridho"
                                size="small"
                                disabled={true}
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12,
                                        color: 'black'
                                    }
                                }}
                            />
                            <TextField
                                label="Jumlah Suara"
                                size="small"
                                type="number"
                                sx={{ width: '100%', marginBottom: 2, fontSize: 12 }}
                                inputRef={jumlahSuara10}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Button
                                color="success"
                                variant="contained"
                                sx={{ width: "100%" }}>
                                Upload G4
                            </Button>
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
                        onClick={() => { addDataVoting(); setOpenModal(false); getDataVoting() }}
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