import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext, defaultContextState } from "../context/AuthContext";

//CONTEXT
import { CustomButton } from "../components/CustomButton";
import { ThemeContext } from "../context/ThemeContext";

//ICONS
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export const CustomDrawer = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;
  const { drawer } = colors;

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Ionicons name="person" size={24} color={colors.text} />
          <Text
            style={{
              fontSize: 28,
              color: colors.text,
              marginLeft: 15,
            }}
          >
            Account
          </Text>
        </View>

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome name="question-circle" size={24} color={colors.text} />
          <Text
            style={{
              fontSize: 28,
              color: colors.text,
              marginLeft: 15,
            }}
          >
            Help
          </Text>
        </View>
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
          borderTopColor: "#9c9c9c",
          borderTopWidth: 2,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setState(defaultContextState);
            navigation.closeDrawer();
          }}
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, marginRight: 25, color: colors.text }}>
            Sign out
          </Text>
          <Octicons name="sign-out" size={26} color={colors.text} />
        </TouchableOpacity>

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
