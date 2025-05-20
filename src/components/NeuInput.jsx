import { useState } from 'react';
import '../styles/neumorphic.css';

export default function NeuInput({ label, onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1">{label}</label>
      <input
        className="neu-input"
        value={value}
        onChange={handleChange}
        placeholder={label}
      />
    </div>
  );
}
