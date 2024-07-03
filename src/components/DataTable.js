import React from 'react';
import './DataTable.css';
import styled from 'styled-components';

const TableWrapper = styled.div`
    margin: 1rem;
    width: fit-content;
`;

const DataTable = ({ data }) => {
    console.log(JSON.stringify(data));

    // TO-DO: Implement topRightLabel option
    const tableData = data.data.map((element, index) => {
        const row = [data.rowLabels ? data.rowLabels[index] : ""];
        element.forEach(value => {
            row.push(value);
        });
        return row;
    });

    const renderColumnLabels = () => {
        if (data.columnLabels) {
            return (
                <thead>
                    <tr>
                        <th></th>
                        {data.columnLabels.map((label, index) => (
                            <th key={index}>{label}</th>
                        ))}
                    </tr>
                </thead>
            );
        }
    };

    return (
        <TableWrapper>
            <h1>{data.title}</h1>
            <table>
                {renderColumnLabels()}
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={cell.style}>
                                    {cell.value ? <span>{cell.value}</span> : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default DataTable;
