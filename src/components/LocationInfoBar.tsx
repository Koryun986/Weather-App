import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLocation } from '../hooks/locationHooks';
import { COLOR_SECONDARY } from '../helpers/styles/StyleConstants';

export const LocationInfoBar: FC = () => {
    const { location, error } = useLocation();

    let city = 'Waiting..';
    if (error) {
        city = error;
    } else if (location) {
        city = JSON.stringify(location);
        city = city.replace(/['".*+?^${}()|[\]\\]/g, "");
    }
    return (
        <View>
            <Text style={styles.city} > { city }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    city : {
        color: COLOR_SECONDARY,
        fontSize: 20,
    }
})