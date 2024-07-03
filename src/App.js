import DataTable from './components/DataTable';
import Chart from './components/BarChart';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import './App.css';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #eeeeee;
`;

localStorage.setItem('data', JSON.stringify(
  [
    {
      key: '1',
      title: 'People',
      type: 'table',
      columnLabels: [
        'Name',
        'Age',
      ],
      rowLabels: [
        'Name',
        'Age',
      ],
      config: {
        topRightLabel: false
      },
      data: [
        [
          'John',
          25
        ],
        [
          'Jane',
          30
        ]
      ]
    },
    {
      key: '2',
      title: 'Ages of People',
      type: 'barChart',
      config: {
        type: 'bar',
        xLabel: 'Name',
        yLabel: 'Age',
        title: 'Ages of People',
        colors: [
          'blue',
          'red'
        ]
      },
      data: [
        {
          x: 'John',
          y: 25
        },
        {
          x: 'Jane',
          y: 30
        }
      ]
    },
    {
      key: '3',
      title: 'People',
      type: 'table',
      columnLabels: [
        'Name',
        'Age',
      ],
      rowLabels: [
        'Name',
        'Age',
      ],
      config: {
        topRightLabel: false
      },
      data: [
        [
          'John',
          25
        ],
        [
          'Jane',
          30
        ]
      ]
    }
  ]
  
));

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(storedData);
  }, []);

  const Header = (fetchDataUrl) => {
    const fetchData = (fetchDataUrl) => {
      if (fetchDataUrl === undefined || fetchDataUrl === '' || fetchDataUrl === null) {
        console.error('No data source URL provided')
        setData({})
        return
      }
      fetch(fetchDataUrl
      ).then(response => response.json()
      ).then(data => {
        setData(data);
      }).catch(error => {
        console.error('Error fetching data:', error)
      })
    };
    
    return (
      <HeaderWrapper>
        <h1>{(data.title !== undefined) ? data.title : "Universal Data Display"}</h1>
        <button onClick={() => fetchData(process.env.DATA_SERVER_SOURCE_URL)}>Fetch Data</button>
      </HeaderWrapper>
    )
  }

  const DataVisuals = () => {
    console.log(data);

    return (
      <div>
        <h2>Data Visuals</h2>
        {data.map((dataItem, index) => (
          <Visual key={index} data={dataItem} />
        ))}
      </div>
    );
  };

  const Visual = ({ data }) => {
    switch (data.type) {
      case 'table':
        console.log('DataTable');
        return <DataTable data={data} />;
      case 'barChart':
        return <Chart data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <DataVisuals />
    </div>
  );
}

export default App;