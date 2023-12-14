import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import IP from "../../fetchIP";

export const getUserData = () => {
  //const { data, isLoading } = useQuery("data", () => await fetch());

  const mutation = useMutation({});

  async function signIn() {
    try {
      const response = await fetch(IP + "/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@hotmail.se",
          password: "1234",
        }),
      });
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.log("error" + error);
      }
    }
  }
};
