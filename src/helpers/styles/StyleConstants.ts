import {Appearance, StyleSheet} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const isLightTheme = colorScheme === "light";

const COLOR_PRIMARY_LIGHT_THEME = "#e5ecf4" ;
const COLOR_PRIMARY_DARK_THEME =  "#313745";

export const COLOR_PRIMARY = isLightTheme ? COLOR_PRIMARY_LIGHT_THEME : COLOR_PRIMARY_DARK_THEME ;
export const COLOR_SECONDARY = isLightTheme ? COLOR_PRIMARY_DARK_THEME : COLOR_PRIMARY_LIGHT_THEME ;

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