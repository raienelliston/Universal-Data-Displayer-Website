import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartWrapper = styled.div`
    margin: 1rem;
    width: 100%;
`;

const ExportChart = (data) => {

    return (
        <ChartWrapper>
            Scatter Chart
        </ChartWrapper>
    )
}

export default ExportChart;