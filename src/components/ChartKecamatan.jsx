import React from 'react';
import Chart from 'react-google-charts';

const ChartKecamatan = ({ apiResponse }) => {
    const data = apiResponse.reduce((acc, curr) => {
        const kelurahan = curr.kecamatan;
        const suara = curr.suara.reduce((obj, item) => {
            const name = Object.keys(item)[1];
            const value = Object.values(item)[1];
            obj[name] = value;
            return obj;
        }, {});
        const kelurahanData = [kelurahan, suara.total_suara_1 || 0, suara.total_suara_2 || 0, suara.total_suara_3 || 0];
        acc.push(kelurahanData);
        return acc;
    }, [["Kelurahan", "Adi", "Jenda", "Luna"]]);
    console.log(data);

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