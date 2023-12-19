import React, { useState, useContext, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Animated,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";

// ICONS
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "../context/ThemeContext";

// COMPONENTS
import { GetEvents } from "../components/GetEvents";
import { GetDogs } from "../components/GetDogs";
import { GetPlaces } from "../components/GetPlaces";
import { SmallButton } from "../components/SmallButton";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

export const SearchScreen = ({ navigation }: Props) => {
  console.log("Searchscreen rendered");

  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;
  const { colors } = theme;

  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisable, setOverlayVisable] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const toggleOverlay = () => {
    setOverlayVisable(!overlayVisable);
  };
};
