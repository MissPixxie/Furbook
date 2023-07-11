import React, { useState } from "react";
import { Overlay } from "@rneui/themed";
import { Text, View, Button } from "react-native";
import { CustomButton } from "./CustomButton";

export const OverlayComponent = () => {
  // const [visible, setVisible] = useState(false);

  // const toggleOverlay = () => {
  //   setVisible(!visible);
  // };

  return (
    <View>
      <Overlay isVisible={true}>
        <View style={{ backgroundColor: "white" }}>
          <Text>sdkfjlsdkjflskdflkjsdfljlsdfksdjflskdjflks</Text>
          <CustomButton
            title="Add new place"
            bgColor="#f7f7f7"
            borderColor="#71ce24"
            borderWidth={2}
            onPress={() => {}}
          />
          <CustomButton title="Close" bgColor="#bced95" onPress={() => {}} />
        </View>
      </Overlay>
      {/* <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay> */}
    </View>
  );
};
