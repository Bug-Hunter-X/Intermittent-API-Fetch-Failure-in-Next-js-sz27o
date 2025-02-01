```javascript
// pages/index.js
// ... (same as before)

// components/MyComponent.js
import { useState, useEffect } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
        // Retry logic could be added here
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <p>Data from API: {data.message}</p>
    </div>
  );
}

// pages/api/data.js
// ... (same as before)
```