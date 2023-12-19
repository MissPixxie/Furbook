import { useQuery } from "@tanstack/react-query";
import IP from "../../fetchIP";

export const fetchDogs = ({}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dogs"],
    queryFn: async () => {
      const response = await fetch(IP + "/dogs");
      if (response) {
        console.log("Success");
      }
      return response.json();
    },
  });
  if (isLoading) {
    return "Loading";
  }
  if (isError) {
    return "Error";
  }
};
