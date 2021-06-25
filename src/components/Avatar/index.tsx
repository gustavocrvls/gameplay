import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type AvatarProps = {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary100, secondary80, } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <Image 
        source={{uri: urlImage}}
        style={styles.avatar}
      />
    </LinearGradient>
  );
}
