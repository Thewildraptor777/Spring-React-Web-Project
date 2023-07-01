import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/my-variable')
      .then(response => {
        setData(response.data);
      })
  }, []);

  if (!data) return <div>Loading...</div>
  
  return (
    <div>
      {JSON.stringify(data)}  
    </div>  
  );
}

function App() {
  return (
    <Component />  
  );
}  

export default App;