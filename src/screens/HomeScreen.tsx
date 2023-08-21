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
import { Users, useFetch } from "../components/FetchData";
import IP from "../../fetchIP";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export const HomeScreen = ({ navigation }: RouterProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, setState } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Users[]>([]); // Declare the 'data' state variable

  const { colors } = theme;
  const { user } = state;

  const _id = user.userID;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [data]);

  // useEffect(() => {
  //   getUserInformation().catch(console.error);
  // }, []);

  // async function getUserInformation() {
  //   const response = await fetch(IP + "/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       _id: _id,
  //     }),
  //   });
  //   const userdata = await response.json();
  //   setData([userdata.user]);
  //   console.log("getting user data" + userdata);
  // }

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
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.dogs}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
