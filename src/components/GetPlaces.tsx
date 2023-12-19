import React, { createContext, useCallback, useContext } from "react";
import { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IP from "../../fetchIP";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { CustomButton } from "./CustomButton";
import { RefreshControl } from "react-native-gesture-handler";
import { Places } from "./Types";
import { useFetch } from "./FetchData";
import { CustomCard } from "./CustomCard";
import { AddPlace } from "./AddPlace";
import { ThemeContext } from "../context/ThemeContext";
import { PlaceItem } from "./PlaceItem";
import { useQuery } from "@tanstack/react-query";
import { useFocusNotifyOnChangeProps } from "../Hooks/useFocusNotifyOnChangeProps";

export const GetPlaces = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  //const { data, error, loading } = useFetch<Places[]>(IP + "/places");
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();

  const { colors } = theme;

  console.log("GetPlaces rendered");

  const [isVisable, setIsVisable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const { data, isLoading, dataUpdatedAt } = useQuery({
    queryKey: ["places"],
    queryFn: async () => {
      const response = await fetch(IP + "/places");
      return response.json();
    },
  });

  // async function pawRating(paw: number, _id: string) {
  //   try {
  //     const response = await fetch(IP + "/places/newrating", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         paw: paw,
  //         _id: _id,
  //       }),
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         Alert.alert(data.message);
  //       });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error);
  //     }
  //   }
  // }

  const itemFromList = ({ item }: { item: Places }) => {
    return <PlaceItem item={item} />;
  };

  return (
    <View style={{ marginTop: 10 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#3d8228" />
      ) : (
        <FlatList
          data={data}
          renderItem={itemFromList}
          keyExtractor={(item) => item._id.toString()}
        />
      )}
    </View>
  );
  //     <Entypo
  //       name="circle-with-plus"
  //       size={64}
  //       color="black"
  //       style={{
  //         position: "absolute",
  //         top: "86%",
  //         left: "87%",
  //         backgroundColor: "#bced95",
  //         borderRadius: 50,
  //         shadowColor: "black",
  //         shadowOffset: { width: -2, height: 4 },
  //         shadowOpacity: 0.9,
  //         shadowRadius: 3,
  //         elevation: 5,
  //       }}
  //       onPress={() => setModalVisible(true)}
  //     />
  //   </SafeAreaView>
  // );
};
