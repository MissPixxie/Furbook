import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

//COMPONENTS
import { CustomButton } from "../components/CustomButton";
import { AuthContext, defaultContextState } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
// import { CustomDrawer } from "../navigation/CustomDrawer";

//ICONS
import { Entypo } from "@expo/vector-icons";
import { Users, useFetch } from "../components/FetchData";
import IP from "../../fetchIP";

interface Props {
  navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
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

  useEffect(() => {
    getUserInformation().catch(console.error);
  }, []);

  async function getUserInformation() {
    const response = await fetch(IP + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
      }),
    });
    const userdata = await response.json();
    setData([userdata.user]);
  }

  console.log(data);

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
      {/* <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20, color: colors.text }}>{item._id}</Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.email}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.password}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.country}
            </Text>
            <Text style={{ fontSize: 20, color: colors.text }}>
              {item.city}
            </Text>
          </View>
        )}
      /> */}
    </SafeAreaView>
  );
};
