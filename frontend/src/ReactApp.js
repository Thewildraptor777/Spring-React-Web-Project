import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/my-variable')
      .then(response => {
        setData(response.data);
      })
  }, []);

  if (!data) return <div>...</div>
  
  return (
    <div>
      {data}  
    </div>  
  );
}

function App() {
  return (
    <>
    <section>
    
    </section>
    <section>
    
    </section>
    <section>
    
    </section>
    <Component />
    <p>hu</p>
    </> 
  );
}

export default App;