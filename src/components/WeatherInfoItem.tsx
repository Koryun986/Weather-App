import { Image, StyleSheet, Text, View } from "react-native";
import { COLOR_SECONDARY, TRANSPARENT_COLOR_SECONDARY } from "../helpers/styles/StyleConstants";

interface WeatherInfoItemProps {
    image: any,
    text: string,
    data: string,
}

export const WeatherInfoItem = ({ image, text, data }: WeatherInfoItemProps) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.icon}
                source={image}
            />
            <Text style={styles.text}> {text} </Text>
            <Text style={styles.data}> {data} </Text>
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        color: TRANSPARENT_COLOR_SECONDARY,
        fontSize: 15,
    },
    data: {
        color: COLOR_SECONDARY,
        fontSize: 25,
    }
});
