import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Overlay } from "@rneui/themed";

import { ThemeContext } from "../context/ThemeContext";
import { GetEvents } from "../components/GetEvents";
import { GetDogs } from "../components/GetDogs";
import { GetPlaces } from "../components/GetPlaces";
import { SmallButton } from "../components/SmallButton";
import { AddPlace } from "../components/AddPlace";

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={toggleModal}
      >
        <AddPlace closeModal={toggleModal} />
      </Modal>
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
          round
          containerStyle={{
            borderRadius: 15,
            backgroundColor: thisTheme ? colors.primary : "#e2e2e2",
          }}
          inputContainerStyle={{
            backgroundColor: thisTheme ? "#a4a4a4" : "#fff",
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
      <View style={styles.buttonsContainer}>
        <SmallButton
          title="Dogs"
          bgColor="#e2e2e2"
          onPress={() => setFilterType(filter_type.dogs)}
          active={filterType === filter_type.dogs}
          icon={<Ionicons name="paw" size={20} color={colors.text} />}
        />
        <SmallButton
          title="Events"
          bgColor="#e2e2e2"
          onPress={() => setFilterType(filter_type.events)}
          active={filterType === filter_type.events}
          icon={<MaterialIcons name="event" size={20} color={colors.text} />}
        />
        <SmallButton
          title="Places"
          bgColor="#e2e2e2"
          onPress={() => setFilterType(filter_type.places)}
          active={filterType === filter_type.places}
          icon={<Entypo name="location-pin" size={20} color={colors.text} />}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: colors.primary }}>
        {filterType === filter_type.dogs && <GetDogs theme={theme} />}
        {filterType === filter_type.events && <GetEvents theme={theme} />}
        {filterType === filter_type.places && (
          <GetPlaces setModalVisible={setModalVisible} theme={theme} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  modal: {
    marginTop: 30,
  },
  blurContainer: {
    flex: 1,
  },
  buttonClose: {
    borderRadius: 10,
    backgroundColor: "#264026",
    paddingVertical: 15,
    paddingHorizontal: 25,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
