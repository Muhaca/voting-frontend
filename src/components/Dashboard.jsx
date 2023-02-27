import { Typography, Paper, Select, MenuItem, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { sxDashboard } from "../assets/sxDashboard";
import MainLayout from "../layouts/MainLayouts";
import MockData from "../assets/datakecamatan.json"
import ChartKecamatan from "./ChartKecamatan";
import ChartKelurahan from "./ChartKelurahan";

const dataBarKel = [
    ["Kelurahan", "Adi", "Jenda", "Luna"],
    ["Dawuan", 30, 40, 290],
    ["Cikalong", 170, 60, 40],
    ["Jatisari", 90, 270, 30],
];

const optionsBar = {
    legend: {
        position: 'bottom',
    },
    chartArea: { 'width': '90%', 'height': '100%' }
};

const optionsPie = {
    legend: {
        position: 'labeled',
        labeledValueText: 'both',
    },
    chartArea: { 'width': '90%', 'height': '60%' },
};

function Dashboard() {

    const sx = sxDashboard;
    const [voting, setVoting] = useState([]);
    // const [dataKec, setDataKec] = useState([]);
    const [dataKel, setDataKel] = useState([]);
    const [totalData, seTotalData] = useState([]);
    // const [filterKec, setFilterKec] = useState('');
    // const [filterKel, setFilterKel] = useState('');


    useEffect(() => {
        getDataVoting();
        // getData()
        // getDataKel()

    }, []);

    const getDataVoting = async () => {
        const res = await axios.get('http://127.0.0.1:1234/getemployee');
        setVoting(res.data.Data);
    }

    const getData = async () => {
        const res = await axios.get('http://127.0.0.1:1234/gettotaldata');
        console.log(res.data);
        seTotalData(res.data);
    }

    const getDataKel= async () => {
        const res = await axios.get('http://127.0.0.1:1234/gettotaldatakel');
        setDataKel(res.data);
    }


    // const getDataVotingKec = async (kec) => {
    //     const res = await axios({
    //         method: 'get',
    //         url: `http://192.168.184.253:1234/gettotaldatakecamatan`,
    //         withCredentials: false,9) => {
    //     const res = await axios({
    //         method: 'get',
    //         url: `http://192.168.184.253:1234/gettotaldatakelurahan`,
    //         withCredentials: false,
    //         params: {
    //             kecamatan: kel
    //         },
    //     });
    //     setDataKel(res.data);
    // }

    const loadDataPie = () => {
        const resPie = Array.from(voting.reduce(
            (m, { nama, JumlahSuara }) => m.set(nama, (m.get(nama) || 0) + JumlahSuara), new Map()
        ), ([nama, JumlahSuara]) => ({ nama, JumlahSuara }));

        let pie = [
            ["Kandidat", "Total"],
            ...resPie?.map(p => {
                return (
                    [p.nama, p.JumlahSuara]
                )
            })
        ]
        return pie;
    }

    return (
        <MainLayout>
            <div style={sx.container}>

                <Paper elevation={3} sx={{ padding: 3 }}>
                <Grid container sx={sx.headerComponent}>
                        <Grid item sx={sx.gridItemHeader}>
                            <Typography sx={{...sx.titleChart, width: '100%'}}>Total Voting</Typography>
                        </Grid>
                    </Grid>
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        maxWidth="554px"
                        height="550px"
                        data={loadDataPie()}
                        options={optionsPie}
                    />
                </Paper>
                {/* <Paper elevation={3} sx={{ padding: 3 }}>
                    <Grid container sx={sx.headerComponent}>
                        <Grid item sx={sx.gridItemHeader}>
                            <Typography sx={sx.titleChart}>Per Kecamatan</Typography>
                        </Grid>
                        <Grid item sx={sx.gridItemHeader}>
                            <Select
                                label="Pilih Kecamatan"
                                value={filterKec}
                                onChange={(e) => { setFilterKec(e.target.value); getDataVotingKec(e.target.value) }}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {MockData.map((value, index) => (
                                    <MenuItem key={index} value={value.kecamatan}>{value.kecamatan}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <ChartKecamatan apiResponse={totalData} />
                </Paper>
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Grid container sx={sx.headerComponent}>
                        <Grid item sx={sx.gridItemHeader}>
                            <Typography sx={sx.titleChart}>Per Kelurahan</Typography>
                        </Grid>
                        <Grid item sx={sx.gridItemHeader}>
                            <Select
                                label="Pilih Kelurahan"
                                value={filterKel}
                                onChange={(e) => { setFilterKel(e.target.value); getDataVotingKel(e.target.value) }}
                                size="small"
                                sx={{ width: '100%', marginBottom: 2 }}>
                                {MockData.map((value, index) => (
                                    <MenuItem key={index} value={value.kelurahan}>{value.kelurahan}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <ChartKelurahan apiResponse={dataKel}/>
                </Paper> */}
            </div>
        </MainLayout>
    );
}

export default Dashboard;