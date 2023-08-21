import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Users, Events, Places, Messages } from "../Types";
import IP from "../../../fetchIP";

interface Props {
  location: string;
  id: string;
}

export function deleteData<T>(url: string, id: string) {
  const [testData, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  async function deleteDog() {
    try {
      const response = await fetch(`${IP}/dogs/${dog._id}`, {
        method: "DELETE",
      });
      const data = response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }


  if (loading) return { loading, error: undefined, data: undefined };
  if (error) return { loading, error, data: undefined };
  return { loading, error, testData };
}
