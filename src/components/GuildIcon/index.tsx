import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://cdnb.artstation.com/p/assets/images/images/028/562/467/large/roosa-freeman-solaire-icon-for-victor-2.jpg?1594825910";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
