import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TRANSPARENT_COLOR_SECONDARY } from "../StyleConstants";

type linePropType = "vertical" | "horizontal";
interface LineProps {
    lineType: linePropType
}

export const Line = ({ lineType }: LineProps) => {
  return (
    <View style={Object.assign({}, styles[lineType], styles.commonProperties)}>
    </View>
  );
};



const styles = StyleSheet.create({
    vertical: {
        width: 3,
        height: 25,
        marginHorizontal: 20,
    },
    horizontal: {
        width: 25,
        height: 3,
        marginVertical: 20
    },
    commonProperties: {
        backgroundColor: TRANSPARENT_COLOR_SECONDARY,
        borderRadius: 3,
    }
});
