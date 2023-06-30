import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLocation } from '../hooks/locationHooks';
import { COLOR_SECONDARY, fonts } from '../helpers/styles/StyleConstants';
import { useDate } from '../hooks/DateHooks';

export const LocationInfoBar: FC = () => {
    const { location, error } = useLocation();
    const { date } = useDate();

    let city = 'Waiting..';
    if (error) {
        city = error;
    } else if (location) {
        city = JSON.stringify(location);
        city = city.replace(/['".*+?^${}()|[\]\\]/g, "");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.city} > { city }</Text>
            <Text style={styles.date} > { date }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    city: {
        color: COLOR_SECONDARY,
        ...fonts.lightFont,
        fontSize: 25,
    },
    date: {
        color: COLOR_SECONDARY,
            fontWeight: "bold",
    }
})