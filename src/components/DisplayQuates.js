import { useState, useEffect } from 'react';

const category = 'knowledge';
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
const apiKey = '8d3AEu5Zw1oN3/7ZcRczQw==Pttifja0qKZnwTuq';

function Display() {
  const [quote, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        console.log(data);
        setData(data[0].quote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div className="load">Something went wrong!</div>;

  if (isLoading) return <div className="load">Loading...</div>;

  return (
    <div className="quote">
      <h1>Best quote</h1>
      <p className="quotes">{quote}</p>
    </div>
  );
}

export default Display;
