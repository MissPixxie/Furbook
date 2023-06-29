import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Octicons } from "@expo/vector-icons";

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#123b3b" }}
      >
        <View style={styles.ListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <Octicons name="sign-out" size={20} color="#333" />
        <Text style={{ paddingLeft: 15 }}>Sign out</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ListContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  drawerFooter: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#ccc",
    padding: 25,
  },
});
