import React, { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setData(products);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, data };
};

export default useFetch;
