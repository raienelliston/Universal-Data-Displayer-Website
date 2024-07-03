import { } from './components/DataTable';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const currentUrl = window.location.origin;
  const dataUrl = `${currentUrl}/path/to/large-data.json`;

  useEffect(() => {
    fetch(dataUrl
    ).then(response => response.json()
    ).then(data => {
      setData(data);
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          caches.open('my-cache-v1').then(cache => {
            cache.put(dataUrl, new Response(JSON.stringify(data)));
          })
        })
      }
  }
  ).catch(error => {
    console.error('Error fetching data:', error)
  })}, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
