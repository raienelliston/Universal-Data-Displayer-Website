import { } from './components/DataTable';
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

function App() {

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const currentUrl = window.location.origin;
  //   const dataUrl = `${currentUrl}/path/to/large-data.json`;
  //   console.log('Data URL:', dataUrl);
  //   fetch(dataUrl
  //   ).then(response => response.json()
  //   ).then(data => {
  //     setData(data);
  //     if ('serviceWorker' in navigator) {
  //       navigator.serviceWorker.ready.then(registration => {
  //         caches.open('my-cache-v1').then(cache => {
  //           cache.put(dataUrl, new Response(JSON.stringify(data)));
  //         })
  //       })
  //     }
  // }
  // ).catch(error => {
  //   console.error('Error fetching data:', error)
  // })}, [data]);

  const Header = () => {

    const url = process.env.DATA_SERVER_SOURCE_URL

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
        <button onClick={(url) => fetchData}>Fetch Data</button>
      </HeaderWrapper>
    )
  }

  return (
    <div className="App">
      <Header />
      adasdfsdfafasdfasdfasfasffddd
    </div>
  );
}

export default App;
