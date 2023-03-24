import { useState, useEffect } from 'react';

const category = 'knowledge';
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
const apiKey = 'fWRUpL/SRtWmSMFaoStknQ==spcRIlF3BA1NC8dT';

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
      <h4 className="quotes">{quote}</h4>
    </div>
  );
}

export default Display;
