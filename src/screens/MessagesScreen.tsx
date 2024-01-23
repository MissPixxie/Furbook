import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext } from "../context/ThemeContext";
import { Image } from "expo-image";
import React, { useContext, useRef, useState } from "react";
import { Text, StyleSheet, Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;

export const MessagesScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 10,
      gap: 15,
    },
    messageContainer: {
      flexDirection: "row",
      gap: 20,
      padding: 15,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      borderBottomRightRadius: 15,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    imgAvatar: {
      borderRadius: 60,
      width: "10%",
      height: "100%",
      alignSelf: "center",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#a7e05c", "#83a15d"]}
        style={styles.messageContainer}
      >
        <Image
          style={styles.imgAvatar}
          source={require("../Images/avatar.jpg")}
        />
        <View>
          <Text>Name</Text>
          <Text>Message</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#a7e05c", "#83a15d"]}
        style={styles.messageContainer}
      >
        <Image
          style={styles.imgAvatar}
          source={require("../Images/avatar.jpg")}
        />
        <View>
          <Text>Name</Text>
          <Text>Message</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#a7e05c", "#83a15d"]}
        style={styles.messageContainer}
      >
        <Image
          style={styles.imgAvatar}
          source={require("../Images/avatar.jpg")}
        />
        <View>
          <Text>Name</Text>
          <Text>Message</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#a7e05c", "#83a15d"]}
        style={styles.messageContainer}
      >
        <Image
          style={styles.imgAvatar}
          source={require("../Images/avatar.jpg")}
        />
        <View>
          <Text>Name</Text>
          <Text>Message</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#a7e05c", "#83a15d"]}
        style={styles.messageContainer}
      >
        <Image
          style={styles.imgAvatar}
          source={require("../Images/avatar.jpg")}
        />
        <View>
          <Text>Name</Text>
          <Text>Message</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
