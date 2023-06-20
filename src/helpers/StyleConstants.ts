import {Appearance, StyleSheet} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const COLOR_PRIMARY_LIGHT_THEME : string = "#e5ecf4" ;
const COLOR_PRIMARY_DARK_THEME : string =  "#313745";

export const COLOR_PRIMARY : string = colorScheme === "light" ? COLOR_PRIMARY_LIGHT_THEME : COLOR_PRIMARY_DARK_THEME ;

export const fonts = {
    regularFont : {
        fontFamily : "Corporate S Regular",
    
    },
    lightFont : {
        fontFamily : "Corporate S Light"
    },
    boldFont : {
        fontFamily : "Corporate S Bold"
    }
}