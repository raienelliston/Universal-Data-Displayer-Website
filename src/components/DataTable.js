import { useState } from 'react';
import styled from 'styled-components';

const DataTable = ({ data }) => {
    console.log(JSON.stringify(data));

    const tableData = [];

    data.data.forEach((element, index) => {
        console.log('Element', element);
        const row = {};
        let count = 0;
        if (data.rowLabels) {
            row[count] = data.rowLabels[index];
            count++;
        }
        element.forEach((value, valueIndex) => {
            row[count] = value;
            count++;
        });
        tableData.push(row);
    });

    console.log('DataTable');
    console.log(tableData);

    return (
        <div>
            <h1>DataTable</h1>
            <table>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;