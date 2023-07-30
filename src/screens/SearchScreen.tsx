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

  const [search, setSearch] = useState<string>("");
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const slideAnim = useRef(new Animated.Value(0)).current;
  const selectTab = (tabIndex: number) => {
    Animated.timing(slideAnim, {
      toValue: -windowWidth * tabIndex,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  interface FILTER_TYPE {
    dogs?: string;
    events?: string;
    places?: string;
  }

  const filter_type: FILTER_TYPE = {
    dogs: "dogs",
    events: "events",
    places: "places",
  };

  const [filterType, setFilterType] = useState(filter_type.dogs);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
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
            backgroundColor: colors.background,
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 3,
          marginBottom: 8,
        }}
      >
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
          <View style={{ width: "100%", height: windowHeight }}>
            <GetDogs />
          </View>
          <View style={{ width: "100%", height: windowHeight }}>
            <GetEvents />
          </View>
          <View style={{ width: "100%", height: windowHeight }}>
            <GetPlaces />
          </View>
        </Animated.View>
      </View>
      {/* <View style={{ flex: 1 }}>
        {filterType === filter_type.dogs && <GetDogs />}
        {filterType === filter_type.events && <GetEvents />}
        {filterType === filter_type.places && <GetPlaces />}
      </View> */}
    </SafeAreaView>
  );
};
