import { useEffect, useState } from "react";

  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setError(true);
          setLoading(false);
        });
    }, [url]);
  
    return {
      data,
      loading,
      error,
    };
  }
  
  export default useFetch;