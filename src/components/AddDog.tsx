import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Overlay } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
// COMPONENTS
import IP from "../../fetchIP";
import { CustomButton } from "./CustomButton";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

// ICONS
import { Foundation, Entypo, MaterialIcons } from "@expo/vector-icons";

// CONTEXT
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { Dogs } from "./Types";
import { request } from "../../Server/app";

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
  const [image, setImage] = useState<string | null>(null);
  const [selectedImageUpload, setSelectedImageUpload] = useState();
  const [cameraPermission, setCameraPermission] =
    ImagePicker.useCameraPermissions();

  // INPUTS
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [openNeutered, setOpenNeutered] = useState(false);
  const [neutered, setNeutered] = useState(null);
  const [neuteredItems, setNeuteredItems] = useState([
    { label: "Yes", value: true },
    { label: "No", value: false },
  ]);
  const [openGender, setOpenGender] = useState(false);
  const [gender, setGender] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);
  // const pickerRef = useRef<any>();

  // function open() {
  //   if (pickerRef != undefined) {
  //     pickerRef.current.focus();
  //   }
  // }

  // function close() {
  //   if (pickerRef != undefined) {
  //     pickerRef.current.blur();
  //   }
  // }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("PickImage function" + result);
      if (result.assets[0].uri != null) {
        setImage(`${result.assets[0].uri}`);
      }
    }
  };

  const requestCameraPermission = () => {
    let result = ImagePicker.getCameraPermissionsAsync();
    if (ImagePicker.PermissionStatus.GRANTED) {
      console.log(result);
      return result;
    } else {
      console.log("Access Denied");
    }
  };

  console.log(cameraPermission);

  const takeImageFromCamera = async () => {
    console.log(cameraPermission);
    // let result = await requestCameraPermission();
    // console.log(result);
    // if (result?.granted == true) {
    //   ImagePicker.launchCameraAsync();
    // } else {
    //   console.log("Access failed");
    // }
    //let permission = await requestCameraPermission();

    // if(permission.assets) {
    //   ImagePicker.
    // }
    // let result = await ImagePicker.requestCameraPermissionsAsync();

    // if (!result.granted) {
    //   console.log("Access granted");
    //   ImagePicker.launchCameraAsync({
    //     aspect: [4, 3],
    //   });
    // }
  };

  console.log(neutered);
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
          sex: gender,
          breed: breed,
          neutered: neutered,
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
    if (!gender) {
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
    } else {
      newDog();
    }
  };

  const styles = StyleSheet.create({
    inputs: {
      padding: 10,
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
    <TouchableWithoutFeedback onPress={closeModal}>
      <KeyboardAwareScrollView>
        <KeyboardAvoidingView behavior="padding">
          <Overlay
            isVisible={true}
            fullScreen={false}
            backdropStyle={{ backgroundColor: "black", opacity: 0.7 }}
            onBackdropPress={closeModal}
            overlayStyle={{
              borderRadius: 10,
              backgroundColor: colors.background,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
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
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button title="From camera roll" onPress={pickImage} />
                  <Button title="Take image" onPress={takeImageFromCamera} />
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                </View>
                <Picker
                  // ref={pickerRef}
                  selectedValue={selectedImageUpload}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedImageUpload(itemValue)
                  }
                >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
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
                <View
                  style={{
                    flexDirection: "row",
                    width: 300,
                    height: 50,
                    padding: 10,
                    marginTop: 10,
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <>
                    <DropDownPicker
                      open={openGender}
                      value={gender}
                      items={genderItems}
                      setOpen={setOpenGender}
                      setValue={setGender}
                      setItems={setGenderItems}
                      placeholder="Sex"
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
                      textStyle={{
                        color: colors.text,
                        fontSize: 18,
                        margin: 10,
                      }}
                    />
                  </>
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
                      open={openNeutered}
                      value={neutered}
                      items={neuteredItems}
                      setOpen={setOpenNeutered}
                      setValue={setNeutered}
                      setItems={setNeuteredItems}
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
                      textStyle={{
                        color: colors.text,
                        fontSize: 18,
                        margin: 10,
                      }}
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
    </TouchableWithoutFeedback>
  );
};
