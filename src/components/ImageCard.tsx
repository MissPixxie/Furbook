import LottieView from "lottie-react-native";
import React, { useRef, useState } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";

interface Props  {
  lottieFiles: {
    like: require("./like.json"),
  },
};

export const ImageCard = ({  }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [processing, setProcessing] = useState(false);
  const animationProgress = useRef(new Animated.Value(0)).current;
  const showAnimation = () => {
    setProcessing(true);
    animationProgress.setValue(0);
    Animated.timing(animationProgress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setIsLiked(!isLiked);
        setProcessing(false);
      }
    });
  };
  return (
    <Pressable
      key={data?.key}
      style={styles.item}
      onLongPress={() => showAnimation()}
    >
      {processing && (
        <Animated.View
          style={[
            styles.overlayLottie,
            {
              opacity: animationProgress.interpolate({
                inputRange: [0, 0.1, 0.9, 1],
                outputRange: [0, 1, 1, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        >
          <LottieView
            progress={animationProgress}
            source={
              isLiked ? Assets.lottieFiles.unLike : Assets.lottieFiles.like
            }
          />
        </Animated.View>
      )}
      <Image
        source={{ uri: data?.img }}
        resizeMode={"cover"}
        style={styles.itemImage}
      />
      <View style={styles.cardRow}>
        <Text style={styles.itemText}>{data?.title}</Text>
        <Text style={styles.likeText}>{isLiked ? "UnLike" : "Like"}</Text>
      </View>
    </Pressable>
  );
};
