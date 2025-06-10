import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../constants/color.js";
import { styles } from "../assets/styles/home.styles.js";
const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
      ></ActivityIndicator>
    </View>
  );
};

export default PageLoader;
