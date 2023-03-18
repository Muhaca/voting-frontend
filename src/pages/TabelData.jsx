import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, Select, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { sxTabelData } from "../assets/styles/sxTabelData";
import MainLayout from "../layouts/MainLayouts";
import axios from "axios";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import exifr from "exifr";
import Pagination from "../components/Pagination";
import { GetKecamatanAPIRequest } from "../integrations/ApiGetKecamatan";
import { GetKelurahanAPIRequest } from "../integrations/ApiGetKelurahan";
import { GetResultVotingAPIRequest } from "../integrations/ApiGetResultVoting";

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
        id: 'jumlah',
        label: 'Jumlah Suara',
    },
    {
        id: 'date',
        label: 'TanggaL Upload',
    },
    {
        id: 'gambar',
        label: 'Gambar',
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
    const [openForm, setOpenForm] = useState(false);
    const [openGambar, setOpenGambar] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [dataKecamatan, setDataKecamatan] = useState([]);
    const [dataKelurahan, setDataKelurahan] = useState([]);
    const [dataEdit, setDataEdit] = useState([]);
    const [state, setState] = useState({});
    const [dataKec, setdataKec] = useState('');
    const [dataKel, setdataKel] = useState('');
    const [nomorTps, setNomorTps] = useState('');
    const [upload, setUpload] = useState(null);
    const dataPhoto = useRef(null);
    const latitudePhoto = useRef(null);
    const longitudePhoto = useRef(null);
    const rowsPerPage = useRef(10);
    const page = useRef(1);
    const totalData = useRef(0);

    useEffect(() => {
        getDataVoting();
    }, []);

    const handleChangeValue = (e) => {
        const jumlahSuara = parseFloat(e.target.value);
        setState({
            ...state, [e.target.name]: jumlahSuara
        });
    };

    const clearData = () => {
        setState({});
        setdataKec('');
        setdataKel('');
        setNomorTps('');
    };

    const getDataVoting = async () => {
        let req = new GetResultVotingAPIRequest();
        req.setPagination(true);
        req.setPerPage(rowsPerPage.current);
        req.setPage(page.current);

        let res = await req.fetch();
        setVoting(res.data.data);
        if (res.data.data) {
            totalData.current = res.data.data.lenght;
        }
    };

    const getKecamatan = async () => {
        let req = new GetKecamatanAPIRequest();
        let res = await req.fetch();
        setDataKecamatan(res.data.Data);
    };

    const getdataKelurahan = async () => {
        let req = new GetKelurahanAPIRequest();
        req.setKecamatan(dataKec);

        let res = await req.fetch();
        setDataKelurahan(res.data);
    };

    const uploadGambar = e => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setUpload(reader.result);
        };
    };

    const handleView = async (data) => {
        dataPhoto.current = data;
        let { latitude, longitude } = await exifr.gps(data);
        latitudePhoto.current = latitude;
        longitudePhoto.current = longitude;
        setOpenGambar(true);
    };

    const handleEdit = (data) => {
        setOpenEdit(true);
        setDataEdit(data);
    };

    const editDataVoting = async (e) => {

        let formData1 = new FormData();
        formData1.append('tps', nomorTps);
        formData1.append('kecamatan', dataKec);
        formData1.append('kelurahan', dataKel);
        formData1.append('nama', 'adi');
        formData1.append('jumlah_suara', state.jumlah_suara_1);
        formData1.append('user', 'Udin');
        formData1.append('gambar', upload);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        let req = axios;
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData1, config);
        setOpenEdit(false);
        clearData();
    };

    const addDataVoting = async (e) => {

        let formData1 = new FormData();
        formData1.append('tps', nomorTps);
        formData1.append('kecamatan', dataKec);
        formData1.append('kelurahan', dataKel);
        formData1.append('nama', 'adi');
        formData1.append('jumlah_suara', state.jumlah_suara_1);
        formData1.append('user', 'Udin');
        formData1.append('gambar', upload);

        let formData2 = new FormData();
        formData2.append('tps', nomorTps);
        formData2.append('kecamatan', dataKec);
        formData2.append('kelurahan', dataKel);
        formData2.append('nama', "jenda");
        formData2.append('jumlah_suara', state.jumlah_suara_2);
        formData2.append('user', 'Udin');
        formData2.append('gambar', upload);

        let formData3 = new FormData();
        formData3.append('tps', nomorTps);
        formData3.append('kecamatan', dataKec);
        formData3.append('kelurahan', dataKel);
        formData3.append('nama', "luna");
        formData3.append('jumlah_suara', state.jumlah_suara_3);
        formData3.append('user', 'Udin');
        formData3.append('gambar', upload);

        let formData4 = new FormData();
        formData4.append('tps', nomorTps);
        formData4.append('kecamatan', dataKec);
        formData4.append('kelurahan', dataKel);
        formData4.append('nama', 'bambang');
        formData4.append('jumlah_suara', state.jumlah_suara_4);
        formData4.append('user', 'Udin');
        formData4.append('gambar', upload);

        let formData5 = new FormData();
        formData5.append('tps', nomorTps);
        formData5.append('kecamatan', dataKec);
        formData5.append('kelurahan', dataKel);
        formData5.append('nama', "asep kurniawan");
        formData5.append('jumlah_suara', state.jumlah_suara_5);
        formData5.append('user', 'Udin');
        formData5.append('gambar', upload);

        let formData6 = new FormData();
        formData6.append('tps', nomorTps);
        formData6.append('kecamatan', dataKec);
        formData6.append('kelurahan', dataKel);
        formData6.append('nama', "sitri badria");
        formData6.append('jumlah_suara', state.jumlah_suara_6);
        formData6.append('user', 'Udin');
        formData6.append('gambar', upload);

        let formData7 = new FormData();
        formData7.append('tps', nomorTps);
        formData7.append('kecamatan', dataKec);
        formData7.append('kelurahan', dataKel);
        formData7.append('nama', "rieke diah pitaloka");
        formData7.append('jumlah_suara', state.jumlah_suara_7);
        formData7.append('user', 'Udin');
        formData7.append('gambar', upload);

        let formData8 = new FormData();
        formData8.append('tps', nomorTps);
        formData8.append('kecamatan', dataKec);
        formData8.append('kelurahan', dataKel);
        formData8.append('nama', "budi");
        formData8.append('jumlah_suara', state.jumlah_suara_8);
        formData8.append('user', 'Udin');
        formData8.append('gambar', upload);

        let formData9 = new FormData();
        formData9.append('tps', nomorTps);
        formData9.append('kecamatan', dataKec);
        formData9.append('kelurahan', dataKel);
        formData9.append('nama', 'sumanto');
        formData9.append('jumlah_suara', state.jumlah_suara_9);
        formData9.append('user', 'Udin');
        formData9.append('gambar', upload);

        let formData10 = new FormData();
        formData10.append('tps', nomorTps);
        formData10.append('kecamatan', dataKec);
        formData10.append('kelurahan', dataKel);
        formData10.append('nama', "ridho");
        formData10.append('jumlah_suara', state.jumlah_suara_10);
        formData10.append('user', 'Udin');
        formData10.append('gambar', upload);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        let req = axios;
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData1, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData2, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData3, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData4, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData5, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData6, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData7, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData8, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData9, config);
        await req.post(process.env.REACT_APP_HOST_VOT + '/insertemployee', formData10, config);

        await getDataVoting();
        console.log(formData1, formData2, formData3, formData4, formData5, formData6, formData7, formData8, formData9, formData10);
    };

    const submitVoting = () => {
        addDataVoting();
        setOpenForm(false);
        clearData();
    };
    const handleChangePage = (newPage) => {
        page.current = newPage;
        getDataVoting();
    };
    const handleChangePerPage = (e) => {
        rowsPerPage.current = e.target.value;
        page.current = 1;
        getDataVoting();
    };

    return (
        <MainLayout>
            <div style={sx.container}>
                <TableContainer sx={{ height: "100%", maxHeight: 500 }}>
                    <Button
                        size="medium"
                        variant="contained"
                        color="warning"
                        sx={{ textTransform: "none", marginBottom: 2 }}
                        onClick={() => setOpenForm(true)}
                    >Tambah Data Suara Baru</Button>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((rows) => {
                                    return (
                                        <TableCell
                                            key={rows.id}
                                            sx={sx.tableCellAction} >
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
                                                            <Typography sx={sx.textCellBlack1}>{values.nama.toUpperCase()}</Typography>
                                                        }
                                                        {rows.id === 'kecamatan' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.Kecamatan}</Typography>
                                                        }
                                                        {rows.id === 'kelurahan' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.kelurahan}</Typography>
                                                        }
                                                        {rows.id === 'user' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.User.toUpperCase()}</Typography>
                                                        }
                                                        {rows.id === 'gambar' &&
                                                            <Button
                                                                variant="outlined"
                                                                onClick={() => handleView(values.gambar)}
                                                                disabled={values.gambar ? false : true}
                                                                sx={sx.textCellBlack1}>
                                                                Lihat Gambar
                                                            </Button>
                                                        }
                                                        {rows.id === 'jumlah' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.JumlahSuara}</Typography>
                                                        }
                                                        {rows.id === 'tps' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.tps}</Typography>
                                                        }
                                                        {rows.id === 'date' &&
                                                            <Typography sx={sx.textCellBlack1}>{values.created_at}</Typography>
                                                        }
                                                        {rows.id === 'action' &&
                                                            <Button
                                                                onClick={() => handleEdit(values)}
                                                                sx={{ width: '100%', justifyContent: 'center' }}
                                                                size="small"
                                                                variant="contained"
                                                                color="success">
                                                                Edit
                                                            </Button>
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination
                    data={voting}
                    count={totalData.current || 1}
                    page={page.current}
                    per_page={[10, 20, 30]}
                    max_page={10}
                    onChangePage={handleChangePage}
                    onChangePerPage={handleChangePerPage}
                />
            </div>

            {/* Dialog View Photo */}
            <Dialog
                open={openGambar}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenGambar(false)}
                PaperProps={{
                    style: { ...sx.dialogCarousel }
                }}
            >
                <div style={sx.dialogHead}>
                    <DialogTitle sx={{ fontSize: "18px", fontWeight: "700" }}>Lihat Photo</DialogTitle>
                    <IconButton onClick={() => setOpenGambar(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent >
                    <Grid style={sx.itemCarousel} >
                        <img src={dataPhoto.current} alt="" style={sx.imgVisit} />
                        <iframe style={sx.iframeMaps} title="maps"
                            src={"https://maps.google.com/maps?q="
                                + latitudePhoto.current + "+" + longitudePhoto.current
                                + "&hl=es&z=14&output=embed"}
                        >
                        </iframe>
                    </Grid>
                </DialogContent>
            </Dialog>

            {/* Dialog All Form Input*/}
            <Dialog
                open={openForm}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => { setOpenForm(false); clearData(); }}
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
                                // defaultValue={dataEdit}
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
                                <label
                                    style={{ width: '100%' }}
                                    htmlFor="upload-photo">
                                    Upload C1
                                </label>
                                <input
                                    id="upload-photo"
                                    type="file"
                                    style={{ opacity: 0, width: 0 }} onChange={uploadGambar} />
                            </Button>
                            <img src={upload} alt="" style={sx.imgUpload} />
                        </Box>
                    </Grid>
                </DialogContent>
                <DialogActions sx={sx.dialogAction}>
                    <Button
                        color="warning"
                        variant="outlined"
                        onClick={() => { setOpenForm(false); clearData(); }}
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

            {/* Dialog Edit Data*/}
            <Dialog
                open={openEdit}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => { setOpenEdit(false); clearData(); }}
                PaperProps={{
                    style: { ...sx.dialogCredit }
                }}
            >
                <DialogTitle sx={sx.textDialogTitle}>{"Form Data Edit"}</DialogTitle>
                <DialogContent>
                    <Grid sx={{ marginTop: 2 }}>
                        <Box sx={{ border: '1px solid #7D8D9E', padding: 3 }}>
                            <TextField
                                label="Nomor TPS"
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}
                                defaultValue={dataEdit.tps}
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
                                defaultValue={dataEdit.Kecamatan}
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
                                defaultValue={dataEdit.kelurahan}
                                value={dataKel}
                                onChange={(e) => setdataKel(e.target.value)}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {dataKelurahan.map((value, index) => (
                                    <MenuItem key={index} value={value.kelurahan}>{value.kelurahan}</MenuItem>
                                ))}
                            </Select>
                            <Typography sx={sx.textCellBlack1}>Kandidat</Typography>
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

                            <Button
                                color="success"
                                variant="contained"
                                sx={{ width: "100%" }}>
                                <label
                                    style={{ width: '100%' }}
                                    htmlFor="upload-photo">
                                    Upload C4
                                </label>
                                <input
                                    id="upload-photo"
                                    type="file"
                                    style={{ opacity: 0, width: 0 }} onChange={uploadGambar} />
                            </Button>
                        </Box>
                    </Grid>
                </DialogContent>
                <DialogActions sx={sx.dialogAction}>
                    <Button
                        color="warning"
                        variant="outlined"
                        onClick={() => { setOpenEdit(false); clearData(); }}
                        sx={{ width: "100%" }}>
                        Batal
                    </Button>
                    <Button
                        disabled={
                            !state.jumlah_suara_1 || !dataKec || !dataKel || !nomorTps || !dataPhoto
                                ? true : false
                        }
                        color="warning"
                        variant="contained"
                        onClick={editDataVoting}
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
