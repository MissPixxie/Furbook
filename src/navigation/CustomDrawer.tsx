import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomButton } from "../components/CustomButton";

//ICONS
import { Octicons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { AuthContext, defaultContextState } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

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
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Close drawer"
        onPress={() => navigation.closeDrawer()}
      />
      <CustomButton
        title="Logout"
        onPress={() => setState(defaultContextState)}
        bgColor={colors.secondary}
      />
      <CustomButton
        title="Theme"
        onPress={toggleTheme}
        bgColor={colors.secondary}
      />
    </DrawerContentScrollView>
  );
};
