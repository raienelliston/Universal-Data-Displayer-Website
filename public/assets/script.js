document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    fetch('/assets/large-data.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched large data:', data);
      });
  });