import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

//ICONS
import { Octicons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

interface Props {
  navigation: any;
}

// export const CustomDrawerContent = ({ navigation }: Props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// };

export const CustomDrawer = ({ navigation }: Props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Close drawer"
        onPress={() => navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};
