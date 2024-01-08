import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import { View } from "react-native";

const SvgComponent = (props: SvgProps) => (
  <View style={{ zIndex: -1 }}>
    <Svg width={390} height={607.371} {...props}>
      <G fill="#fff">
        <Path d="M180 210.184h210v286H0v-106a180 180 0 0 1 180-180Z" />
        <Path d="M334.27 162.645c31.617-29 82.678-7.327 83.78 35.563l1.206 46.882a50 50 0 0 0 12.28 31.554l33.043 37.94c27.39 31.446 6.513 80.63-35.135 82.773L379.2 399.94a50 50 0 0 0-31.229 13.087l-34.561 31.7c-31.618 29-82.679 7.327-83.78-35.563l-1.206-46.882a50 50 0 0 0-12.28-31.555L183.1 292.79c-27.39-31.447-6.512-80.63 35.136-82.773l50.245-2.585a50 50 0 0 0 31.229-13.087Z" />
      </G>
    </Svg>
  </View>
);
export default SvgComponent;
