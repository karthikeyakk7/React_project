import React, { useEffect, useState } from 'react';
import dataFile from '../data.json'; // Adjust the path to your file

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set data directly since it's imported
    setData(dataFile);
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.firstLogo}</li> // Adjust key and value based on your JSON structure
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
