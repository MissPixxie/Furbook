import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  SlideInUp,
  withDelay,
  withSequence,
  StretchInX,
} from "react-native-reanimated";
import * as ImagePicker from "expo-image-picker";

//COMPONENTS
import { CustomButton } from "../components/CustomButton";
import { AuthContext, defaultContextState } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
// import { CustomDrawer } from "../navigation/CustomDrawer";
import { fetchSavedEvents } from "../API/fetchSavedEvents";
import { useFetch } from "../components/FetchData";
import IP from "../../fetchIP";
import { NavigationProp } from "@react-navigation/native";
import { Users, Dogs, Events, Places, Messages } from "../components/Types";
import { EventItem } from "../components/EventItem";
import { CustomCard } from "../components/CustomCard";
import { useSaveEvent } from "../API/useSaveEvent";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

//ICONS
import { Entypo } from "@expo/vector-icons";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export const HomeScreen = ({ navigation }: RouterProps) => {
  console.log("Homescreen rendered");

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const { state, setState } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Users[]>([]);
  const [animationIsActive, setAnimationIsActive] = useState(false);
  const toggleAnimation = () => {
    console.log(animationIsActive);
    setAnimationIsActive((previousState) => !previousState);
    triggerAnimation();
  };

  const { events } = fetchSavedEvents();
  const { user } = state;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [data]);

  console.log(fetchSavedEvents);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
  });

  const itemFromList = ({ item }: { item: Events }) => {
    return (
      <>
        <CustomCard>
          <EventItem item={item} />
        </CustomCard>
      </>
    );
  };

  const scaleX = useSharedValue(0);
  const scaleY = useSharedValue(0);
  const initialBottomPosition = useSharedValue(0);
  const initialLeftPosition = useSharedValue(0);
  const initialWidth = useSharedValue("0%");

  // const reanimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     // transform: [{ scaleX: scaleX.value }, { scaleY: scaleX.value }],
  //     bottom: initialBottomPosition.value,
  //     left: initialLeftPosition.value,
  //     width: initialWidth.value,
  //   };
  // }, []);

  const triggerAnimation = () => {
    if (animationIsActive) {
      // scaleX.value = withSpring(1);
      // scaleY.value = withTiming(1);
      initialLeftPosition.value = withRepeat(
        withTiming(145, { duration: 1000 }),
        1,
        true
      );
      initialBottomPosition.value = withRepeat(
        withTiming(-250, { duration: 1000 }),
        1,
        true
      );
      initialWidth.value = withSpring("5%");
      // if (bottomPosition.value === 50) {
      //   width.value = withSpring("90%", { damping: 50 });
      // }
    } else {
      // scaleX.value = withSpring(0);
      // scaleY.value = withSpring(0);
      initialWidth.value = withSpring("0%", { damping: 50 });
      initialBottomPosition.value = withRepeat(
        withTiming(-100, { duration: 1000 }),
        1,
        true
      );
      initialLeftPosition.value = withRepeat(
        withTiming(40, { duration: 1000 }),
        1,
        true
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "90%" }}>
        <Text>Aktiviteter</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomCard>
            <Text>Akitivtet 1</Text>
          </CustomCard>
          <CustomCard>
            <Text>Akitivtet 1</Text>
          </CustomCard>
          <CustomCard>
            <Text>Akitivtet 1</Text>
          </CustomCard>
        </View>
      </View>

      <View>
        <CustomCard>
          <Text>Something else</Text>
        </CustomCard>
      </View>

      <View style={styles.container}>
        <Animated.View
          style={[
            {
              height: 200,
              width: "5%",
              backgroundColor: "gray",
              position: "absolute",
              zIndex: 1,
              bottom: -250,
              left: 145,
            },
            // reanimatedStyle,
          ]}
        />
      </View>
      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={{ padding: 20 }}
      >
        <Animated.View
          style={[{ height: SIZE, width: SIZE }, reanimatedStyle]}
        />
        <Text>Hello</Text>
      </LinearGradient> */}
      {/* <Button title="Tryck" onPress={toggleAnimation} /> */}
    </SafeAreaView>
  );
};
