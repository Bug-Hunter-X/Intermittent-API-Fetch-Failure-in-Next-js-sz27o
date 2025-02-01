```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js App</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useState, useEffect } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Data from API: {data.message}</p>
    </div>
  );
}

// pages/api/data.js
export default async function handler(req, res) {
  // Simulate an API call that sometimes fails
  if (Math.random() < 0.5) {
    res.status(200).json({ message: 'Data fetched successfully!' });
  } else {
    res.status(500).json({ error: 'Failed to fetch data!' });
  }
}
```