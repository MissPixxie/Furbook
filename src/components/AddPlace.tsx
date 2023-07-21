import React, { useContext } from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BlurView } from "expo-blur";
import IP from "../../fetchIP";

import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

import { CustomButton } from "./CustomButton";
import { ThemeContext } from "../context/ThemeContext";
import { Overlay } from "@rneui/themed";
import { BackgroundImage } from "@rneui/themed/dist/config";

interface Props {
  closeModal: () => void;
}

interface Place {
  name: string;
  category: string;
  location: string;
  description: string;
}

export const AddPlace = ({ closeModal }: Props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Beach" },
    { key: "2", value: "Store" },
    { key: "3", value: "Café" },
    { key: "5", value: "Park" },
  ];

  async function newPlace() {
    try {
      const response = await fetch(IP + "/places/newplace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          category: category,
          location: location,
          description: description,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          Alert.alert(data.message);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <Overlay
        isVisible={true}
        backdropStyle={{ backgroundColor: "black", opacity: 0.7 }}
        overlayStyle={{
          borderRadius: 10,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Entypo
            name="cross"
            size={36}
            color="black"
            style={styles.exitButton}
            onPress={closeModal}
          />
          <View style={styles.inputs}>
            <View style={styles.Input}>
              <Entypo name="location-pin" size={24} color="black" />
              <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Name"
                style={styles.inputText}
              />
            </View>
            <View style={styles.Input}>
              <Foundation name="telephone" size={24} color="black" />
              <TextInput
                onChangeText={setLocation}
                value={location}
                style={styles.inputText}
                placeholder="Location"
              />
            </View>
            <View style={styles.Input}>
              <MaterialIcons name="category" size={24} color="black" />
              <TextInput
                onChangeText={setCategory}
                value={category}
                placeholder="Category"
                style={styles.inputText}
              />
            </View>
            <View style={styles.Input}>
              <Entypo name="pencil" size={24} color="black" />
              <TextInput
                onChangeText={setDescription}
                value={description}
                placeholder="Description"
                style={styles.inputText}
              />
            </View>
          </View>
          <CustomButton
            title="Add new place"
            bgColor="#f7f7f7"
            borderColor="#71ce24"
            borderWidth={2}
            onPress={newPlace}
          />
          <CustomButton title="Close" bgColor="#bced95" onPress={closeModal} />
        </View>
      </Overlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputs: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  Input: {
    flexDirection: "row",
    width: 300,
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#262626",
  },
  inputText: {
    marginLeft: 13,
    fontSize: 18,
    borderBottomColor: "black",
  },
  exitButton: {
    alignSelf: "flex-end",
    color: "#5d5d5d",
    marginHorizontal: 20,
    marginTop: 20,
  },
});
