import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import IP from "../../fetchIP";
import { AuthContext } from "../context/AuthContext";
import { Date } from "mongoose";
import { Places, Dogs, Users, Events, Messages } from "./Types";

interface Props {
  location: string;
}

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
