import React from 'react';
import './DataTable.css';

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
                        <th></th> {/* Empty header cell for the row labels column */}
                        {data.columnLabels.map((label, index) => (
                            <th key={index}>{label}</th>
                        ))}
                    </tr>
                </thead>
            );
        }
    };

    console.log('DataTable');
    console.log(tableData);

    return (
        <div>
            <h1>{data.title}</h1>
            <table>
                {renderColumnLabels()}
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
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
