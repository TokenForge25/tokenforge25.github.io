import { useState } from 'react';
import NeuInput from './components/NeuInput';
import './styles/neumorphic.css';

export default function TokenForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return setError('Token name required');
    if (name.length < 3) return setError('Minimum 3 characters');
    setError('');
    try {
      const response = await fetch('https://api.tokenforge.workers.dev/api/create-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, symbol: name.slice(0, 4).toUpperCase() })
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to create token');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4">
      <NeuInput label="Token Name" onChange={setName} />
      {error && <p className="text-red-500">{error}</p>}
      {result && <p className="text-green-500">Token created: {result.txHash}</p>}
      <button className="neu-button">Generate Token</button>
    </form>
  );
}
