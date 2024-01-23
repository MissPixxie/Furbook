import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import {
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext, defaultContextState } from "../context/AuthContext";

//CONTEXT
import { CustomButton } from "../components/CustomButton";
import { ThemeContext } from "../context/ThemeContext";

//ICONS
import {
  FontAwesome,
  Ionicons,
  Octicons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Ellipse, G } from "react-native-svg";

interface Props {
  navigation: any;
}

export const CustomDrawer = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };

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
    toggleThemeButton: {
      alignSelf: "center",
      transform:
        Platform.OS === "ios"
          ? [{ scaleX: 0.9 }, { scaleY: 0.9 }]
          : [{ scaleX: 1.2 }, { scaleY: 1.2 }],
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
      <LinearGradient
        start={theme.dark ? { x: -3, y: 0 } : { x: 0, y: 0 }}
        end={theme.dark ? { x: 1, y: 1 } : { x: 2, y: 1 }}
        colors={
          theme.dark ? ["#3D3D3D", colors.background] : ["#fff", "#BBE29D"]
        }
        style={{ flex: 1 }}
      >
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor: "#EBF9E0",
          }}
        >
          <Image
            source={require("../Images/avatar.jpg")}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
        </View>
        <View style={{ paddingTop: 20, flex: 1 }}>
          <Svg
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          >
            <G transform="translate(34.427 -197.218)">
              <Ellipse
                cx={189.5}
                cy={332.5}
                fill={theme.dark ? "#F3FFEB" : "#FFF"}
                fillOpacity={theme.dark ? 0.4 : 1}
                rx={189.5}
                ry={332.5}
                transform="rotate(12.04 -857.228 859.75)"
              />
              <Ellipse
                cx={183.572}
                cy={323.196}
                fill="#EBF9E0"
                fillOpacity={theme.dark ? 0.3 : 0.9}
                opacity={0.61}
                rx={183.572}
                ry={323.196}
                transform="rotate(-5 3651.248 -191.369)"
              />
              <Ellipse
                cx={189.5}
                cy={332.5}
                fill={theme.dark ? "#DBF1CA" : "#86AE69"}
                fillOpacity={theme.dark ? 0.4 : 0.1}
                opacity={0.76}
                rx={189.5}
                ry={332.5}
                transform="rotate(-19.01 1470.716 351.908)"
              />
            </G>
          </Svg>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={styles.links}>
              <View style={styles.titleContainer}>
                <Ionicons name="person" size={20} color={colors.text} />
                <Text style={styles.title}> Account </Text>
              </View>
              <CustomButton
                title="Profile"
                fontSize={16}
                onPress={() => {}}
                bgColor={colors.secondaryLight}
              />
              <CustomButton
                title="Privacy settings"
                fontSize={16}
                onPress={() => {}}
                bgColor={colors.secondaryLight}
              />
              <CustomButton
                title="Notifications"
                fontSize={16}
                onPress={() => {}}
                bgColor={colors.secondaryLight}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  paddingHorizontal: 40,
                  marginVertical: Platform.OS === "ios" ? 20 : 0,
                }}
              >
                <Entypo
                  name="light-up"
                  size={18}
                  color={theme.dark ? colors.text : colors.text}
                />
                <Switch
                  trackColor={{ false: "#BBE29D", true: "#616161" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.toggleThemeButton}
                />
                <Feather
                  name="moon"
                  size={18}
                  color={theme.dark ? colors.text : colors.text}
                />
              </View>
              <View style={styles.titleContainer}>
                <FontAwesome
                  name="question-circle"
                  size={20}
                  color={colors.text}
                />
                <Text style={styles.title}> Help </Text>
              </View>
              <CustomButton
                title="About Furbooks"
                fontSize={16}
                onPress={() => {}}
                bgColor={colors.secondaryLight}
              />
              <CustomButton
                title="Contact"
                fontSize={16}
                onPress={() => {}}
                bgColor={colors.secondaryLight}
              />
              <CustomButton
                title="Privacy policy"
                fontSize={16}
                onPress={() => {}}
                bgColor={colors.secondaryLight}
              />
            </View>

            {/* SIGN OUT BUTTON */}
            <View>
              <LinearGradient
                colors={
                  theme.dark
                    ? ["#E1F2D4", "#83a15d"]
                    : ["white", colors.secondary]
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 20,
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
                  <Text
                    style={{ fontSize: 18, marginRight: 25, color: "black" }}
                  >
                    Sign out
                  </Text>
                  <Octicons name="sign-out" size={22} color="black" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
            {/* SIGN OUT BUTTON END */}
          </View>
        </View>
      </LinearGradient>

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
