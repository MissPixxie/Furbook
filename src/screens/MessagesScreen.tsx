import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Button,
  Alert,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import { GetEvents } from "../components/GetEvents";
import { GetDogs } from "../components/GetDogs";
import { GetPlaces } from "../components/GetPlaces";
import { SmallButton } from "../components/SmallButton";
import { ThemeContext } from "../context/ThemeContext";
import { SearchBar } from "@rneui/themed";

interface Props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
//const windowHeight = Dimensions.get("window").height;

export const MessagesScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  const [search, setSearch] = useState<string>("");
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const slideAnim = useRef(new Animated.Value(0)).current;
  const selectTab = (tabIndex: number) => {
    Animated.timing(slideAnim, {
      toValue: -windowWidth * tabIndex,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const styles = StyleSheet.create({
    tabBox: {
      width: "100%",
      // height: windowHeight,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <View>
        <SmallButton
          title="Filter"
          bgColor="#bced95"
          align="flex-end"
          onPress={() => {}}
        />
      </View>
      <View>
        <SearchBar
          containerStyle={{
            backgroundColor: thisTheme ? colors.background : "#e2e2e2",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
          }}
          inputContainerStyle={{
            backgroundColor: thisTheme ? "#535353" : "#fff",
          }}
          searchIcon={{
            size: 32,
            color: thisTheme ? "#fff" : "#000",
          }}
          inputStyle={{
            fontSize: 20,
            color: thisTheme ? "#fff" : "#000",
          }}
          placeholderTextColor={thisTheme ? "#fff" : "#000"}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <View style={styles.buttonRow}>
        <SmallButton
          title="Dogs"
          bgColor="#e2e2e2"
          onPress={() => {
            selectTab(0);
          }}
          icon={<Ionicons name="paw" size={20} color={colors.text} />}
        />
        <SmallButton
          title="Events"
          bgColor="#e2e2e2"
          onPress={() => {
            selectTab(1);
          }}
          icon={<MaterialIcons name="event" size={20} color={colors.text} />}
        />
        <SmallButton
          title="Places"
          bgColor="#e2e2e2"
          onPress={() => {
            selectTab(2);
          }}
          icon={<Entypo name="location-pin" size={20} color={colors.text} />}
        />
      </View>
      <View>
        <Animated.View
          style={{
            flexDirection: "row",
            transform: [{ translateX: slideAnim }],
          }}
        >
          <View style={styles.tabBox}>
            <GetDogs />
          </View>
          <View style={styles.tabBox}>
            <GetEvents />
          </View>
          <View style={styles.tabBox}>
            <GetPlaces />
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

// const FirstTab = () => (
//   <View style={styles.tabBox}>
//     <GetDogs />
//   </View>
// );

// const SecondTab = () => (
//   <View style={styles.tabBox}>
//     <GetEvents />
//   </View>
// );

// const ThirdTab = () => (
//   <View style={styles.tabBox}>
//     <GetPlaces />
//   </View>
// );
