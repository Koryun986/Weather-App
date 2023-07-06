import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Asset, useAssets } from 'expo-asset';
import images from "./../../assets/resources/images";

export const WeatherIcon = () => {

    
  return (<View style={styles.container}>
            <Image 
            style={styles.icon}
            source={images.iconSunny}
            />
        </View>);
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 100,
        height: 100,
    }
})