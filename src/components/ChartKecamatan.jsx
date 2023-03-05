import React from 'react';
import Chart from 'react-google-charts';

const ChartKecamatan = ({ apiResponse }) => {
    const data = apiResponse.reduce((acc, curr) => {
        const kecamatan = curr.kecamatan;
        const suara = curr.suara.reduce((obj, item) => {
            const name = Object.keys(item)[1];
            const value = Object.values(item)[1];
            obj[name] = value;
            return obj;
        }, {});
        const kecamatanData = [
            kecamatan,
            suara.total_suara_1 || 0,
            suara.total_suara_2 || 0,
            suara.total_suara_3 || 0,
            suara.total_suara_4 || 0,
            suara.total_suara_5 || 0,
            suara.total_suara_6 || 0,
            suara.total_suara_7 || 0,
            suara.total_suara_8 || 0,
            suara.total_suara_9 || 0,
            suara.total_suara_10 || 0
        ];
        acc.push(kecamatanData);
        return acc;
    }, [[
        "Kelurahan",
        "Adi",
        "Jenda",
        "Luna",
        "Bambang",
        "Asep Kurniawan",
        "Sitri Badriah",
        "Rieke Diah Pitaloka",
        "Budi",
        "Sumanto",
        "Ridho"
    ]]);
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                legend: {
                    position: 'bottom',
                },
                chartArea: { 'width': '90%', 'height': '100%' }
            }}
        />
    );
};

export default ChartKecamatan;