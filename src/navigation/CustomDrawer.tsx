import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext, defaultContextState } from "../context/AuthContext";

//CONTEXT
import { CustomButton } from "../components/CustomButton";
import { ThemeContext } from "../context/ThemeContext";

//ICONS
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export const CustomDrawer = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 28,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Account
        </Text>
        {/* <DrawerItem
          label="Settings"
          icon={({ focused, color, size }) => (
            <Ionicons name="settings-sharp" size={24} color="black" />
          )}
          onPress={() => navigation.navigate("Settings")}
        /> */}
        <CustomButton
          title="Profile"
          fontSize={20}
          onPress={() => {}}
          bgColor={colors.secondary}
        />
        <CustomButton
          title="Privacy settings"
          fontSize={20}
          onPress={() => {}}
          bgColor={colors.secondary}
        />
        <CustomButton
          title="Notifications"
          fontSize={20}
          onPress={() => {}}
          bgColor={colors.secondary}
        />
        <CustomButton
          title="Theme"
          fontSize={20}
          onPress={toggleTheme}
          bgColor={colors.secondary}
        />
      </View>
      <View>
        <Text style={{ fontSize: 28, textAlign: "center", marginBottom: 10 }}>
          Help
        </Text>
        <CustomButton
          title="About Furbooks"
          fontSize={20}
          onPress={() => {}}
          bgColor={colors.secondary}
        />
        <CustomButton
          title="Contact"
          fontSize={20}
          onPress={() => {}}
          bgColor={colors.secondary}
        />
        <CustomButton
          title="Privacy policy"
          fontSize={20}
          onPress={() => {}}
          bgColor={colors.secondary}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Octicons name="sign-out" size={28} color="black" />
        <Text style={{ fontSize: 24, marginLeft: 10 }}>Logout</Text>
        {/* <DrawerItem
          label="Logout"
          icon={({ focused, color, size }) => (
            <Octicons name="sign-out" size={24} color="black" />
          )}
          onPress={() => setState(defaultContextState)}
        /> */}
      </View>

      {/* <Switch
        trackColor={newTheme === "light" ? "#767577" : "#81ff83"}
        thumbColor={newTheme === "light" ? "#f4f3f4" : "#184718"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={newTheme === "light"}
      />  */}
    </DrawerContentScrollView>
  );
};
