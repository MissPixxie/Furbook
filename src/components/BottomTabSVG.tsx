import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import Svg, { SvgProps, G, Path, Ellipse } from "react-native-svg";
const BottomTabSVG = (props: SvgProps) => (
  <Svg width={412} height={156.812}>
    <LinearGradient colors={["pink", "blue"]}>
      <G fill="pink" transform="translate(0 -803.09)">
        <Path d="M0 834.501h412v105H0z" />
        <Ellipse
          cx={43.5}
          cy={40}
          rx={42.5}
          ry={42}
          transform="translate(152.775 804.922)"
        />
      </G>
    </LinearGradient>
  </Svg>
);
export default BottomTabSVG;
