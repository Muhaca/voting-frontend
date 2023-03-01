import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, MenuItem, Select, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { sxTabelData } from "../assets/sxTabelData";
import MainLayout from "../layouts/MainLayouts";
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
    const [state, setState] = useState({});
    const [dataKec, setdataKec] = useState('');
    const [dataKel, setdataKel] = useState('');
    const [nomorTps, setNomorTps] = useState('');

    useEffect(() => {
        getDataVoting();
    }, []);

    const handleChangeValue = (e) => {
        const jumlahSuara = parseFloat(e.target.value)
        setState({
            ...state, [e.target.name]: jumlahSuara
        })
    }

    const clearData = () => {
        setState({})
        setdataKec('')
        setdataKel('')
        setNomorTps('')
    }

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
        let param = dataKec
        const res = await axios.get('http://127.0.0.1:1234/getkelurahan?kecamatan=' + param);
        setDataKelurahan(res.data)
    }

    const submitVoting = () => {
        addDataVoting();
        setOpenModal(false);
        getDataVoting()
    }


    const addDataVoting = async (e) => {

        let formData1 = new FormData()
        formData1.append('tps', nomorTps)
        formData1.append('kecamatan', dataKec)
        formData1.append('kelurahan', dataKel)
        formData1.append('nama', 'adi')
        formData1.append('jumlah_suara', state.jumlah_suara_1)
        formData1.append('user', 'Udin')

        let formData2 = new FormData()
        formData2.append('tps', nomorTps)
        formData2.append('kecamatan', dataKec)
        formData2.append('kelurahan', dataKel)
        formData2.append('nama', "jenda")
        formData2.append('jumlah_suara', state.jumlah_suara_2)
        formData2.append('user', 'Udin')

        let formData3 = new FormData()
        formData3.append('tps', nomorTps)
        formData3.append('kecamatan', dataKec)
        formData3.append('kelurahan', dataKel)
        formData3.append('nama', "luna")
        formData3.append('jumlah_suara', state.jumlah_suara_3)
        formData3.append('user', 'Udin')

        let formData4 = new FormData()
        formData4.append('tps', nomorTps)
        formData4.append('kecamatan', dataKec)
        formData4.append('kelurahan', dataKel)
        formData4.append('nama', 'bambang')
        formData4.append('jumlah_suara', state.jumlah_suara_4)
        formData4.append('user', 'Udin')

        let formData5 = new FormData()
        formData5.append('tps', nomorTps)
        formData5.append('kecamatan', dataKec)
        formData5.append('kelurahan', dataKel)
        formData5.append('nama', "asep kurniawan")
        formData5.append('jumlah_suara', state.jumlah_suara_5)
        formData5.append('user', 'Udin')

        let formData6 = new FormData()
        formData6.append('tps', nomorTps)
        formData6.append('kecamatan', dataKec)
        formData6.append('kelurahan', dataKel)
        formData6.append('nama', "sitri badria")
        formData6.append('jumlah_suara', state.jumlah_suara_6)
        formData6.append('user', 'Udin')


        let formData7 = new FormData()
        formData7.append('tps', nomorTps)
        formData7.append('kecamatan', dataKec)
        formData7.append('kelurahan', dataKel)
        formData7.append('nama', "rieke diah pitaloka")
        formData7.append('jumlah_suara', state.jumlah_suara_7)
        formData7.append('user', 'Udin')

        let formData8 = new FormData()
        formData8.append('tps', nomorTps)
        formData8.append('kecamatan', dataKec)
        formData8.append('kelurahan', dataKel)
        formData8.append('nama', "budi")
        formData8.append('jumlah_suara', state.jumlah_suara_8)
        formData8.append('user', 'Udin')

        let formData9 = new FormData()
        formData9.append('tps', nomorTps)
        formData9.append('kecamatan', dataKec)
        formData9.append('kelurahan', dataKel)
        formData9.append('nama', 'sumanto')
        formData9.append('jumlah_suara', state.jumlah_suara_9)
        formData9.append('user', 'Udin')

        let formData10 = new FormData()
        formData10.append('tps', nomorTps)
        formData10.append('kecamatan', dataKec)
        formData10.append('kelurahan', dataKel)
        formData10.append('nama', "ridho")
        formData10.append('jumlah_suara', state.jumlah_suara_10)
        formData10.append('user', 'Udin')


        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        let req = axios
        await req.post('http://127.0.0.1:1234/insertemployee', formData1, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData2, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData3, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData4, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData5, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData6, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData7, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData8, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData9, config)
        await req.post('http://127.0.0.1:1234/insertemployee', formData10, config)


        // let res_1 = await req.post('http://127.0.0.1:1234/insertemployee', formData1, config)
        // let res_2 = await req.post('http://127.0.0.1:1234/insertemployee', formData2, config)
        // let res_3 = await req.post('http://127.0.0.1:1234/insertemployee', formData3, config)
        // let res_4 = await req.post('http://127.0.0.1:1234/insertemployee', formData4, config)
        // let res_5 = await req.post('http://127.0.0.1:1234/insertemployee', formData5, config)
        // let res_6 = await req.post('http://127.0.0.1:1234/insertemployee', formData6, config)
        // let res_7 = await req.post('http://127.0.0.1:1234/insertemployee', formData7, config)
        // let res_8 = await req.post('http://127.0.0.1:1234/insertemployee', formData8, config)
        // let res_9 = await req.post('http://127.0.0.1:1234/insertemployee', formData9, config)
        // let res_10 = await req.post('http://127.0.0.1:1234/insertemployee', formData10, config)
        // console.log(res_1, res_2, res_3, res_4, res_5, res_6, res_7, res_8, res_9, res_10);
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
                onClose={() => { setOpenModal(false); clearData() }}
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
                                value={nomorTps}
                                onChange={(e) => setNomorTps(e.target.value)}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <Typography sx={sx.textCellBlack1}>Kecamatan</Typography>
                            <Select
                                onOpen={getKecamatan}
                                value={dataKec}
                                onChange={(e) => setdataKec(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {dataKecamatan.map((value, index) => (
                                    <MenuItem key={index} value={value.kecamatan} >{value.kecamatan}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={sx.textCellBlack1}>Kelurahan</Typography>
                            <Select
                                onOpen={getdataKelurahan}
                                value={dataKel}
                                onChange={(e) => setdataKel(e.target.value)}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_1"
                                value={state.jumlah_suara_1 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_2"
                                value={state.jumlah_suara_2 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_3"
                                value={state.jumlah_suara_3 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_4"
                                value={state.jumlah_suara_4 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_5"
                                value={state.jumlah_suara_5 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_6"
                                value={state.jumlah_suara_6 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_7"
                                value={state.jumlah_suara_7 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_8"
                                value={state.jumlah_suara_8 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_9"
                                value={state.jumlah_suara_9 || ''}
                                onChange={handleChangeValue}
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
                                sx={sx.textKandidate}
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
                                name="jumlah_suara_10"
                                value={state.jumlah_suara_10 || ''}
                                onChange={handleChangeValue}
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
                                Upload C4
                            </Button>
                        </Box>
                    </Grid>
                </DialogContent>
                <DialogActions sx={sx.dialogAction}>
                    <Button
                        color="warning"
                        variant="outlined"
                        onClick={() => { setOpenModal(false); clearData() }}
                        sx={{ width: "100%" }}>
                        Batal
                    </Button>
                    <Button
                        disabled={
                            !state.jumlah_suara_1 || !state.jumlah_suara_2 || !state.jumlah_suara_3 ||
                                !state.jumlah_suara_4 || !state.jumlah_suara_5 || !state.jumlah_suara_6 ||
                                !state.jumlah_suara_7 || !state.jumlah_suara_8 || !state.jumlah_suara_9 ||
                                !state.jumlah_suara_10 || !dataKec || !dataKel || !nomorTps
                                ? true : false
                        }
                        color="warning"
                        variant="contained"
                        onClick={submitVoting}
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
