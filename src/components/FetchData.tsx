import { useEffect, useState, useMemo } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(undefined);
      setError(undefined);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  if (loading) return { loading, error: undefined, data: undefined };
  if (error) return { loading, error, data: undefined };
  return { loading, error, data };
}
