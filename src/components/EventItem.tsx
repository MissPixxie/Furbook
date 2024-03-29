import React, { Children, createContext, useContext, useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl } from "react-native-gesture-handler";
import { useFetch } from "./FetchData";
import { Events } from "./Types";

import IP from "../../fetchIP";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useSaveEvent } from "../API/useSaveEvent";
import { useRemoveSavedEvent } from "../API/useRemoveSavedEvent";

interface ItemProps {
  item: Events;
}

export const EventItem = ({ item }: ItemProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state } = useContext(AuthContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  const [isVisable, setIsVisable] = useState(false);
  const [isActive, setActive] = useState(false);

  // useEffect(() => {
  //   if (isActive) {
  //     const savedEvents = [...state.user.userSavedEvents];
  //     savedEvents.push(item);
  //     console.log(savedEvents);
  //   }
  // }, [isActive, item, state.user.userSavedEvents]);

  const userMutation = useMutation({
    mutationFn: async () => hello,
  });

  const toggleSavedItems = () => {
    setActive((prevState) => !prevState);
    userMutation.mutate();
  };

  function hello() {
    console.log("hej");
  }

  const styles = StyleSheet.create({
    postContainer: {
      width: "100%",
      marginBottom: 20,
      backgroundColor: colors.card,
      alignSelf: "center",
      padding: 15,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    arrowButton: {
      alignSelf: "center",
    },
    item: {
      flexDirection: "row",
      paddingVertical: 8,
    },
  });

  const newEvent = useSaveEvent({ eventId: item._id });

  const removeEvent = useRemoveSavedEvent({ eventId: item._id });

  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={styles.postContainer}>
        {isActive ? (
          <AntDesign
            name="pushpin"
            size={24}
            color="black"
            style={{ alignSelf: "flex-end" }}
            onPress={toggleSavedItems}
          />
        ) : (
          <AntDesign
            name="pushpino"
            size={24}
            color="black"
            style={{ alignSelf: "flex-end" }}
            onPress={toggleSavedItems}
          />
        )}
        <Text style={{ fontSize: 26, color: colors.text }}>{item.title}</Text>
        <Text style={{ fontSize: 20, color: colors.text }}>{item.place}</Text>
        <Text style={{ fontSize: 20, color: colors.text }}>{item.time}</Text>

        <View>
          <Pressable onPress={newEvent}>
            <Text>Lägg till</Text>
          </Pressable>
          <Pressable onPress={removeEvent}>
            <Text>Ta bort</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => {
            setIsVisable(!isVisable);
          }}
          style={styles.arrowButton}
        >
          {isVisable ? (
            <Entypo name="chevron-thin-up" size={42} color={colors.text} />
          ) : (
            <Entypo name="chevron-thin-down" size={42} color={colors.text} />
          )}
        </Pressable>
        {isVisable && (
          <View>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.description}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.typeOfEvent}
            </Text>
          </View>
        )}
        {item.date && <Text>{item.date.toString()}</Text>}
      </View>
    </View>
  );
};
