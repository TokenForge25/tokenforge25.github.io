import { useState, useEffect } from 'react';
import '../styles/neumorphic.css';

export default function TxVisualizer() {
  const [txStatus, setTxStatus] = useState('idle');

  useEffect(() => {
    // Mock transaction lifecycle
    const stages = ['signing', 'simulating', 'finalizing', 'confirmed'];
    let i = 0;
    const interval = setInterval(() => {
      setTxStatus(stages[i]);
      i = (i + 1) % stages.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 p-4">
      {['signing', 'simulating', 'finalizing', 'confirmed'].map((stage) => (
        <div
          key={stage}
          className={`neu-input p-2 ${txStatus === stage ? 'bg-blue-500 text-white' : ''}`}
        >
          {stage.charAt(0).toUpperCase() + stage.slice(1)}
        </div>
      ))}
    </div>
  );
}
