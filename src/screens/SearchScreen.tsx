import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={styles.container}>
      <View>
        <SmallButton
          title="Filter"
          bgColor="#bced95"
          align="flex-end"
          onPress={() => {}}
        />
      </View>
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

      <View>
        <SearchBar
          round
          containerStyle={{
            borderRadius: 15,
            backgroundColor: thisTheme ? "#000" : "#e2e2e2",
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
        {filterType === filter_type.dogs ? <GetDogs theme={theme} /> : null}
        {filterType === filter_type.events ? <GetEvents theme={theme} /> : null}
        {filterType === filter_type.places ? (
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
