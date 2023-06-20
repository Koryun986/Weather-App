import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLocation } from '../hooks/locationHooks';

export const LocationInfoBar: FC = () => {
    const { location, errorMsg } = useLocation();

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <View>
            <Text > {text }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    location : {

    }
})