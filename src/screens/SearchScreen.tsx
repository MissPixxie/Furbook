import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Modal,
} from "react-native";
import { BlurView } from "expo-blur";
import { SearchBar } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { ThemeContext } from "../../App";
import { RefreshControl } from "react-native-gesture-handler";
import GetEvents from "../components/GetEvents";
import GetDogs from "../components/GetDogs";
import GetPlaces from "../components/GetPlaces";
import SmallButton from "../components/SmallButton";
import AddPlace from "../components/AddPlace";

interface Props {
  navigation: any;
}

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const thisTheme = theme.dark;

  const { colors } = theme;

  const [modalVisible, setModalVisible] = useState(false);

  const [search, setSearch] = useState<string>("");
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  interface FILTER_TYPE {
    dogs: string;
    events: string;
    places: string;
  }

  const filter_type: FILTER_TYPE = {
    dogs: "Dogs",
    events: "Events",
    places: "Places",
  };

  const [filterType, setFilterType] = useState<FILTER_TYPE>();

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AddPlace />
        <Pressable
          style={styles.buttonClose}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </Modal>
      <Pressable onPress={() => {}} style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </Pressable>
      <View>
        <SearchBar
          round
          containerStyle={{
            borderRadius: 15,
            backgroundColor: thisTheme ? "#000" : "#8E8E8E",
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
          onPress={() =>
            setFilterType({ ...filter_type, dogs: filter_type.dogs })
          }
          active={filterType?.dogs === filter_type.dogs}
          icon={<Ionicons name="paw" size={20} color={colors.text} />}
        />
        <SmallButton
          title="Events"
          onPress={() =>
            setFilterType({ ...filter_type, events: filter_type.events })
          }
          active={filterType?.events === filter_type.events}
          icon={<MaterialIcons name="event" size={20} color={colors.text} />}
        />
        <SmallButton
          title="Places"
          onPress={() =>
            setFilterType({ ...filter_type, places: filter_type.places })
          }
          active={filterType?.places === filter_type.places}
          icon={<Entypo name="location-pin" size={20} color={colors.text} />}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: colors.primary }}>
        {filterType?.dogs === filter_type.dogs ? (
          <GetDogs theme={theme} />
        ) : null}
        {filterType?.events === filter_type.events ? (
          <GetEvents theme={theme} />
        ) : null}
        {filterType?.places === filter_type.places ? (
          <GetPlaces setModalVisible={setModalVisible} theme={theme} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  openModalButton: {
    width: "80%",
    backgroundColor: "#264026",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  blurContainer: {
    flex: 1,
  },
  filterButton: {
    width: "30%",
    backgroundColor: "#bced95",
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  filterButtonText: {
    textAlign: "center",
    fontSize: 20,
    marginRight: 7,
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
  modal: {
    flex: 1,
    backgroundColor: "white",
  },
});
