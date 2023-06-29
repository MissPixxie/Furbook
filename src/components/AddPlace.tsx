import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IP from "../../fetchIP";

import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface Place {
  name: string;
  category: string;
  location: string;
  description: string;
}

export default function AddPlace() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

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
    <KeyboardAwareScrollView>
      <View style={styles.container}>
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
        <Pressable onPress={newPlace}>
          <Text style={styles.addButton}>Add new place</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
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
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: "#0a2121",
    width: 300,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#0a2121",
  },
  SigninText: {
    fontSize: 18,
    color: "white",
  },
});
