import React, { useContext } from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Overlay } from "@rneui/themed";

// COMPONENTS
import IP from "../../fetchIP";
import { CustomButton } from "./CustomButton";

// ICONS
import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

interface Props {
  closeModal: () => void;
  refreshDogsPage: () => void;
}

export const AddDog = ({ closeModal, refreshDogsPage }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const owner = user.userID;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [breed, setBreed] = useState("");
  const [neutered, setNeutered] = useState("");

  async function newDog() {
    try {
      const response = await fetch(IP + "/dogs/newdog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
          sex: sex,
          breed: breed,
          neutered: neutered,
          owner: owner,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.ok === true) {
            closeModal();
            refreshDogsPage();
          }
          Alert.alert(data.message);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

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
      backgroundColor: colors.inputs,
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#262626",
    },
    inputText: {
      marginLeft: 13,
      fontSize: 18,
      borderBottomColor: "black",
      color: colors.text,
    },
    exitButton: {
      alignSelf: "flex-end",
      color: "#5d5d5d",
      marginHorizontal: 20,
      marginTop: 20,
    },
  });

  return (
    <KeyboardAwareScrollView>
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
                <TextInput
                  onChangeText={setName}
                  value={name}
                  placeholder="Name"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={setAge}
                  value={age}
                  style={styles.inputText}
                  placeholder="Age"
                  placeholderTextColor={colors.text}
                />
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={setSex}
                  value={sex}
                  placeholder="Sex"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={setBreed}
                  value={breed}
                  placeholder="Breed"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={setNeutered}
                  value={neutered}
                  placeholder="Neutered"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
            </View>
            <CustomButton
              title="Add new dog"
              bgColor="#f7f7f7"
              borderColor="#71ce24"
              borderWidth={2}
              onPress={newDog}
            />
            <CustomButton
              title="Close"
              bgColor="#bced95"
              onPress={closeModal}
            />
          </View>
        </Overlay>
      </KeyboardAvoidingView>
    </KeyboardAwareScrollView>
  );
};
