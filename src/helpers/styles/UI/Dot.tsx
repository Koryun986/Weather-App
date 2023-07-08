import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR_SECONDARY } from "../StyleConstants";

export const Dot = () => {
  return (
    <View style={styles.dot}>
    </View>
  );
};

const styles = StyleSheet.create({
    dot: {
        width: 7,
        height: 7,
        backgroundColor: COLOR_SECONDARY,
        borderRadius: 5,
        margin: 1,
    }
});
