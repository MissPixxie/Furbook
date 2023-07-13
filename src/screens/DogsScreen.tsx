import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { AddDog } from "../components/AddDog";
import { CustomButton } from "../components/CustomButton";

interface Props {
  navigation: any;
}

export const DogsScreen = ({ navigation }: Props) => {
  const { state, setState } = useContext(AuthContext);
  const { user } = state;

  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisable, setOverlayVisable] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleOverlay = () => {
    setOverlayVisable(!overlayVisable);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={toggleModal}
      >
        <AddDog closeModal={toggleModal} />
      </Modal>
      <Text>Dogs</Text>

      <CustomButton
        title="New dog"
        bgColor="#bced95"
        onPress={() => setModalVisible(true)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020",
  },
  modal: {
    marginTop: 30,
  },
});
