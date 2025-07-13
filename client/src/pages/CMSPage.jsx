
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CMS.css'

const CMSPage = () => {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/heading')
      .then(res => setHeading(res.data.heading))
      .catch(err => console.error(err));
  }, []);

  const handleSave = () => {
    axios.post('http://localhost:5000/api/heading', { heading })
      .then(() => alert("Heading updated!"))
      .catch(() => alert("Failed to update heading"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-4">CMS: Edit Heading</h1>
        <textarea
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full h-40 p-4 border border-gray-300 rounded focus:outline-none"
        />
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CMSPage;
