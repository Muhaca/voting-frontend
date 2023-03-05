import { Typography, Paper, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Chart from "react-google-charts";
import { sxDashboard } from "../assets/sxDashboard";
import MainLayout from "../layouts/MainLayouts";
import ChartKecamatan from "../components/ChartKecamatan";
import ChartKelurahan from "../components/ChartKelurahan";

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
    const [dataKel, setDataKel] = useState([]);
    const [totalData, seTotalData] = useState([]);
    const [dataKecamatan, setDataKecamatan] = useState([]);
    const [filterKec, setFilterKec] = useState('');
    const dataFetchedRef = useRef(false);
    const kecamatan = useRef('');


    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        getDataVoting();
        getData()
        getDataKel()
    });

    const getDataVoting = async () => {
        const res = await axios.get(process.env.REACT_APP_HOST_VOT + '/getemployee');
        setVoting(res.data.Data);
    }

    const getData = async () => {
        const res = await axios.get(process.env.REACT_APP_HOST_VOT + '/gettotaldata');
        seTotalData(res.data);
    }

    const getKecamatan = async () => {
        const res = await axios.get(process.env.REACT_APP_HOST_VOT + '/getkecamatan');
        setDataKecamatan(res.data.Data)
    }

    const getDataKelurahan = async (e) => {
        setFilterKec(e.target.value);
        kecamatan.current = e.target.value
        getDataKel()
    }

    const getDataKel = async () => {
        const res = await axios.get(process.env.REACT_APP_HOST_VOT + '/gettotaldatakel?kecamatan=' + kecamatan.current );
        setDataKel(res.data);
    }

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
                            <Typography sx={{ ...sx.titleChart, width: '100%' }}>Total Voting</Typography>
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
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Grid container sx={sx.headerComponent}>
                        <Grid item sx={sx.gridItemHeader}>
                            <Typography sx={sx.titleChart}>Per Kecamatan</Typography>
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
                            <FormControl fullWidth>
                                <InputLabel sx={sx.label} >Pilih Kelurahan</InputLabel>
                                <Select
                                    onOpen={getKecamatan}
                                    value={filterKec}
                                    onChange={getDataKelurahan}
                                    size="small"
                                    sx={{ width: '100%', marginBottom: 2 }}>
                                    <MenuItem
                                        value=""
                                        sx={{ fontSize: "12px", fontWeight: "400" }}>
                                        <em>None</em>
                                    </MenuItem>
                                    {dataKecamatan.map((value, index) => (
                                        <MenuItem
                                            key={index}
                                            value={value.kecamatan}
                                            sx={{ fontSize: "12px", fontWeight: "400" }}>
                                            {value.kecamatan}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <ChartKelurahan apiResponse={dataKel} />
                </Paper>
            </div>
        </MainLayout>
    );
}

export default Dashboard;