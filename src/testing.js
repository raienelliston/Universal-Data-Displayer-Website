
const testData = () => {
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
}

export default testData;