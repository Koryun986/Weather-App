import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dot } from "../helpers/styles/UI/Dot";

export const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Dot />
      <Dot />
      <Dot />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }
});
