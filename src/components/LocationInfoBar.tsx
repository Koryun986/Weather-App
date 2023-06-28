import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLocation } from '../hooks/locationHooks';

export const LocationInfoBar: FC = () => {
    const { location, error } = useLocation();

    let text = 'Waiting..';
    if (error) {
        text = error;
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