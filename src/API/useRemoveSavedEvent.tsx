import IP from "../../fetchIP";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Events } from "../components/Types";

interface Props {
  eventId: string;
}

export const useRemoveSavedEvent = ({ eventId }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;

  const userId = user.userID;

  async function newEvent() {
    try {
      const response = await fetch(IP + "/users/" + userId + "/remove-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: eventId,
          userId: userId,
        }),
      });
      const resp = await response.json();
      console.log(resp);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  return newEvent;
};
