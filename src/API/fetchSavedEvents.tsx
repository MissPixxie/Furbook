import { useContext, useEffect, useState } from "react";
import IP from "../../fetchIP";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { Events } from "../components/Types";

export const fetchSavedEvents = () => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const [events, setEvents] = useState();

  //const [data, setData] = useState<any>();

  useEffect(() => {
    getData();
  }, []);

  //  const useFetchEvents = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       IP + "/users/" + user.userID + "/saved-events"
  //     );
  //     if (response) {
  //       console.log(response.json());
  //       //setEvents(response);
  //     }
  //     return response.json();
  //   },
  // });

  async function getData() {
    try {
      const response = await fetch(
        IP + "/users/" + user.userID + "/saved-events"
      );
      const eventData = await response.json();
      console.log(eventData);
      setEvents(eventData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  return { events };
};
