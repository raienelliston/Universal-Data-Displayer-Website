import { useState } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Rename later?
const ExportChart = (data) => {

    













    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey={data.config.xLabel} />
                <YAxis dataKey={data.config.yLabel} />
                <Bar dataKey="y" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ExportChart;