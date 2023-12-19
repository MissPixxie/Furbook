import { useQuery, useQueryClient } from "@tanstack/react-query";
import IP from "../../fetchIP";
import { useState } from "react";

export const dataFetch = async () => {
  const queryClient = useQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["dogs"],
    queryFn: async () => {
      const response = await fetch(IP + "/dogs");
      if (response) {
        console.log("prefetch Success");
      }
      return response.json();
    },
  });
};

//const useDataFetch = () => useQuery("dogs", dataFetch);
