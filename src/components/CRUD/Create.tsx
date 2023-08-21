import React, { useContext, useEffect } from "react";
import { useState } from "react";

export function createData<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  async function deleteDog() {
    try {
      const response = await fetch(`${IP}/dogs/${dog._id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  if (loading) return { loading, error: undefined, data: undefined };
  if (error) return { loading, error, data: undefined };
  return { loading, error, data };
}
