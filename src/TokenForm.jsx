import React, { useState } from 'react';
import DOMPurify from 'dompurify';

function TokenForm() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedInput = DOMPurify.sanitize(input);
    setOutput(`Generated Token: ${sanitizedInput}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">TokenForge</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="input">
              Input
            </label>
            <input
              type="text"
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your input"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Generate Token
          </button>
        </form>
        {output && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-800">{output}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TokenForm;
