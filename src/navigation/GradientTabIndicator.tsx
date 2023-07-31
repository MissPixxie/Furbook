import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
  state: any;
}

export const GradientTabIndicator = ({ navigation, state }: Props) => {
  const tabWidth = 100 / state.routes.length;
  const currentPosition = state.index * tabWidth;

  return (
    <View style={{ width: `${tabWidth}%`, position: "absolute", bottom: 0 }}>
      <LinearGradient
        colors={["#FF5733", "#00C6FF"]} // Anpassa gradientfärgerna efter behov
        start={{ x: 0, y: 0 }} // Startposition för gradienten (0,0 är topp vänster, 1,1 är botten höger)
        end={{ x: 1, y: 0 }} // Slutposition för gradienten
        style={{ height: 4, width: "100%" }} // Anpassa höjden för flikindikatorn
      >
        <View
          style={{
            width: `${tabWidth}%`,
            backgroundColor: "transparent",
            height: 4,
            transform: [{ translateX: currentPosition }],
          }}
        />
      </LinearGradient>
    </View>
  );
};
