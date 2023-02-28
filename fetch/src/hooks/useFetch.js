import { useEffect, useState } from "react";


function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
     
      try {
        const response = await fetch(url);

        
        if (!response.ok) {
          setError("Response not OK");
          setIsLoading(false);
          return;
        }

       
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
       
        setError(error);
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    getData();
  }, [url]);

  return {
    isLoading,
    error,
    data,
  };
}

export default useFetch;
