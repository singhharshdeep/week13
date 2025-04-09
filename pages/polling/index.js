import React, { useEffect, useState } from 'react';

function PollingComponent() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();
      setFact(result.fact);
    }, 10000); // Fetches data every 10 seconds

    return () => clearInterval(intervalId); // Cleans up the interval when component unmounts
  }, []);

  return (
    <div>
      {fact ? <p>Cat Fact: {fact}</p> : <p>Loading...</p>}
    </div>
  );
}

export default PollingComponent;