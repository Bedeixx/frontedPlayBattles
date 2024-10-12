import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://playbattles-f33e38167e8a.herokuapp.com/')
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch((error) => console.error("Error al obtener datos del backend:", error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
