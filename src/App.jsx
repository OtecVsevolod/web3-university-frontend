import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("https://web3-university-backend.onrender.com/status")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => console.error("Ошибка:", err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Web3 University Frontend</h1>
      <h2>Backend status:</h2>
      {status ? (
        <pre>{JSON.stringify(status, null, 2)}</pre>
      ) : (
        <p>Загружаем...</p>
      )}
    </div>
  );
}

export default App;
