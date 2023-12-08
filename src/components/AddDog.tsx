import React, { useContext, useEffect } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";
// COMPONENTS
import IP from "../../fetchIP";
import { CustomButton } from "./CustomButton";

// ICONS
import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { Dogs } from "./Types";

interface Props {
  closeModal: () => void;
  //addDog: (dogs: Dogs) => void;
  updateFunction: () => void;
}

export const AddDog = ({ closeModal, updateFunction }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;
  const owner = user.userID;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;
  const [isFormValid, setIsFormValid] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [breed, setBreed] = useState("");
  const [neutered, setNeutered] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]);

  const [openSex, setOpenSex] = useState(false);
  const [valueSex, setValueSex] = useState(null);
  const [itemsSex, setItemsSex] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  async function newDog() {
    try {
      const response = await fetch(IP + "/dogs/new-dog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
          sex: sex,
          breed: breed,
          neutered: value,
          owner: owner,
        }),
      });
      const resp = await response.json();
      console.log(resp);
      if (resp.ok === true) {
        closeModal();
        updateFunction();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }

  const checkInput = () => {
    if (!name) {
      Alert.alert("Name is required");
      return;
    }
    if (!age) {
      Alert.alert("Age is required");
      return;
    }
    if (!sex) {
      Alert.alert("Sex is required");
      return;
    }
    if (!breed) {
      Alert.alert("Breed is required");
      return;
    }
    if (!neutered) {
      Alert.alert("Neutered is required");
      return;
    }
  };

  const styles = StyleSheet.create({
    inputs: {
      padding: 10,
      marginBottom: 15,
    },
    Input: {
      flexDirection: "row",
      width: 300,
      height: 50,
      margin: 10,
      padding: 10,
      backgroundColor: colors.inputs,
      alignItems: "center",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 9,
    },
    inputText: {
      marginLeft: 13,
      fontSize: 18,
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
            display: "flex",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
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
                  inputMode="numeric"
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
                {/* <Menu
                  onSelect={(value) => Alert.alert(`Selected number: ${value}`)}
                >
                  <MenuTrigger text="Select option" />
                  <MenuOptions>
                    <MenuOption value={1} text="One" />
                    <MenuOption value={2}>
                      <Text style={{ color: "red" }}>Two</Text>
                    </MenuOption>
                    <MenuOption value={3} disabled={true} text="Three" />
                  </MenuOptions>
                </Menu> */}
                {/* <DropDownPicker
                  open={openSex}
                  value={valueSex}
                  items={itemsSex}
                  setOpen={setOpenSex}
                  setValue={setValueSex}
                  setItems={setItemsSex}
                  placeholder="Sex"
                  style={{
                    backgroundColor: colors.inputs,
                    width: 300,
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: colors.inputs,
                    width: 300,
                  }}
                  textStyle={{ color: colors.text, fontSize: 18, margin: 10 }}
                /> */}
              </View>
              <View style={styles.Input}>
                <TextInput
                  onChangeText={(value) => setBreed(value)}
                  value={breed}
                  placeholder="Breed"
                  style={styles.inputText}
                  placeholderTextColor={colors.text}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: 300,
                  height: 50,
                  padding: 10,
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Neutered"
                    style={{
                      backgroundColor: colors.inputs,
                      width: 300,
                    }}
                    dropDownContainerStyle={{
                      backgroundColor: colors.inputs,
                      width: 300,
                      display: "flex",
                      paddingVertical: 7,
                    }}
                    textStyle={{ color: colors.text, fontSize: 18, margin: 10 }}
                  />
                </>
              </View>
            </View>
            <View style={{ zIndex: -1, width: "100%" }}>
              <CustomButton
                title="Add new dog"
                bgColor="#f7f7f7"
                borderColor="#71ce24"
                borderWidth={2}
                onPress={checkInput}
              />
              <CustomButton
                title="Close"
                bgColor="#bced95"
                onPress={closeModal}
              />
            </View>
          </View>
        </Overlay>
      </KeyboardAvoidingView>
    </KeyboardAwareScrollView>
  );
};
