import { useState } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

const ChartWrapper = styled.div`
    margin: 1rem;
    width: 100%;
`;

const ExportChart = (data) => {

    console.log(data);

    const CheckLegend = () => {
        if (data.data.config.legend) {
            return (
                <Legend width={180} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
            );
        }
        return null;
    }

    return (
        <ChartWrapper>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart width={500} height={300} data={data.data.data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
            <XAxis dataKey={'name'} />
            <YAxis />
            <Legend />
            {data.data.config.dataKeys.map((type, index) => (
                <Bar key={index} dataKey={type.name} fill={type.color} />
            ))}
        </BarChart>
        </ResponsiveContainer>
    </ChartWrapper>
    )
}

export default ExportChart;