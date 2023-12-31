import {Appearance, StyleSheet} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const isLightTheme = colorScheme === "light";

const COLOR_PRIMARY_LIGHT_THEME = "#e5ecf4" ;
const COLOR_PRIMARY_DARK_THEME =  "#313745";
const TRANSPARENT_COLOR_PRIMARY_LIGHT_THEME = "rgba(229, 236, 244, 0.5)";
const TRANSPARENT_COLOR_PRIMARY_DARK_THEME = "rgba(49, 55, 69, 0.5)";

export const COLOR_PRIMARY = isLightTheme ? COLOR_PRIMARY_LIGHT_THEME : COLOR_PRIMARY_DARK_THEME ;
export const COLOR_SECONDARY = isLightTheme ? COLOR_PRIMARY_DARK_THEME : COLOR_PRIMARY_LIGHT_THEME ;
export const TRANSPARENT_COLOR_SECONDARY = isLightTheme ? TRANSPARENT_COLOR_PRIMARY_DARK_THEME : TRANSPARENT_COLOR_PRIMARY_LIGHT_THEME;

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