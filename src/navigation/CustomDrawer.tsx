import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext, defaultContextState } from "../context/AuthContext";

//CONTEXT
import { CustomButton } from "../components/CustomButton";
import { ThemeContext } from "../context/ThemeContext";

//ICONS
import { FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
}

export const CustomDrawer = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { colors } = theme;
  const { drawer } = colors;

  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    title: {
      fontSize: 22,
      color: colors.text,
      marginLeft: 15,
    },
    links: {
      marginBottom: 25,
    },
  });

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../Images/avatar.jpg")}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
      <View
        style={{ paddingTop: 20, flex: 4, backgroundColor: colors.background }}
      >
        <View style={styles.links}>
          <View style={styles.titleContainer}>
            <Ionicons name="person" size={20} color={colors.text} />
            <Text style={styles.title}> Account </Text>
          </View>
          <CustomButton
            title="Profile"
            fontSize={16}
            onPress={() => {}}
            bgColor={colors.secondary}
          />
          <CustomButton
            title="Privacy settings"
            fontSize={16}
            onPress={() => {}}
            bgColor={colors.secondary}
          />
          <CustomButton
            title="Notifications"
            fontSize={16}
            onPress={() => {}}
            bgColor={colors.secondary}
          />
          <CustomButton
            title="Theme"
            fontSize={16}
            onPress={toggleTheme}
            bgColor={colors.secondary}
          />
          <View style={styles.titleContainer}>
            <FontAwesome name="question-circle" size={20} color={colors.text} />
            <Text style={styles.title}> Help </Text>
          </View>
          <CustomButton
            title="About Furbooks"
            fontSize={16}
            onPress={() => {}}
            bgColor={colors.secondary}
          />
          <CustomButton
            title="Contact"
            fontSize={16}
            onPress={() => {}}
            bgColor={colors.secondary}
          />
          <CustomButton
            title="Privacy policy"
            fontSize={16}
            onPress={() => {}}
            bgColor={colors.secondary}
          />
        </View>
        <View>
          <LinearGradient
            colors={
              theme.dark ? ["#BBE29D", "#E1F2D4"] : ["white", colors.secondary]
            }
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
              borderTopColor: theme.dark ? colors.background : "#9c9c9c",
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
              }}
            >
              <Text style={{ fontSize: 18, marginRight: 25, color: "black" }}>
                Sign out
              </Text>
              <Octicons name="sign-out" size={22} color="black" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
