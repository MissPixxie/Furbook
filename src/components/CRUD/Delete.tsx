import { useEffect, useState } from "react";
import IP from "../../../fetchIP";
import { Dogs, Events, Messages, Places, Users } from "../Types";

interface Props {
  url: URL;
  id?: string;
  type: Types;
}

type Types = Users | Events | Places | Dogs | Messages;

type URL = "/dogs/" | "/users/" | "/events/" | "/places/";

export function deleteData<T>(url: URL, type: Types, id?: string) {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<any>(null);

  useEffect(() => {
    const deleteItem = async () => {
      // setLoading(true);
      // setData(undefined);
      // setError(undefined);
      try {
        const response = await fetch(IP + url, {
          method: "DELETE",
          body: JSON.stringify({
            type,
          }),
        });
        const data = await response.json();
      } catch (error) {
        //  setError(error);
      } finally {
        //  setLoading(false);
      }
    };
    deleteItem();
  }, [url]);

  // async function deleteDog() {
  //   try {
  //     const response = await fetch(`${IP}/dogs/${}`, {
  //       method: "DELETE",
  //     });
  //     const data = response.json();
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error);
  //     }
  //   }
  // }

  // if (loading) return { loading, error: undefined, data: undefined };
  // if (error) return { loading, error, data: undefined };
  // return { loading, error, data };
}
