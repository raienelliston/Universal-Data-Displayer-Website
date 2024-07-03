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

const DisplayWrapper = styled.div`
  margin: 1rem;
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
          {
            value: 'Jane',
            style: {
              color: 'red',
              backgroundColor: 'yellow'
            }
          },
          {
            value: 30,
            style: {
              color: 'red',
              backgroundColor: 'yellow'
            }
          }
        ]
      ]
    },
    {
      key: '2',
      title: 'Ages of People',
      type: 'barChart',
      config: {
        xLabel: 'Name',
        yLabel: 'Age',
        title: 'Ages of People',
        dataKeys: [
          {
            name: 'uv',
            color: 'blue'
          },
          {
            name: 'pv',
            color: 'red'
          }
        ],
      },
      data: [{
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      }]
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
          <DisplayWrapper>
            <Visual key={index} data={dataItem} />
          </DisplayWrapper>
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