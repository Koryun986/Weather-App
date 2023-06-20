import * as Location from 'expo-location';
import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// interface ILocation {
//     timestamp: number,
//     mocked : string,
//     coords : 
// }

export const LocationInfoBar: FC = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState <string | null> (null);

    useEffect(() => {
        (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location : Location.LocationObject = await Location.getCurrentPositionAsync({});
        console.log(location);
        
        setLocation(location);
        })();
    }, []);

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