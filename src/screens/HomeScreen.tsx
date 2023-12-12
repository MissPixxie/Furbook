import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//COMPONENTS
import { CustomButton } from "../components/CustomButton";
import { AuthContext, defaultContextState } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
// import { CustomDrawer } from "../navigation/CustomDrawer";

//ICONS
import { Entypo } from "@expo/vector-icons";
import { useFetch } from "../components/FetchData";
import IP from "../../fetchIP";
import { NavigationProp } from "@react-navigation/native";
import { Users, Dogs, Events, Places, Messages } from "../components/Types";
import { EventItem } from "../components/EventItem";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export const HomeScreen = ({ navigation }: RouterProps) => {
  console.log("Homescreen rendered");

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Users[]>([]);

  const { colors } = theme;
  const { user } = state;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [data]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    viewBox: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.primary,
      padding: 20,
    },
    pinned: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.secondary,
    },
    addStuff: {
      flex: 2,
      width: "100%",
      backgroundColor: colors.secondary,
      borderRadius: 15,
    },
  });

  const itemFromList = ({ item }: { item: Events }) => {
    return <EventItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <OverlayComponent /> */}
      <View style={styles.viewBox}>
        <View style={styles.pinned}>
          <Text>Pinned</Text>
        </View>
      </View>
      <View style={styles.viewBox}>
        <View style={styles.addStuff}>
          <Text>Add stuff</Text>
        </View>
      </View>
      <FlatList
        data={user.userSavedEvents}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={itemFromList}
        keyExtractor={(item) => item._id.toString()}
      />
    </SafeAreaView>
  );
};
