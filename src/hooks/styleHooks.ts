import * as Font from 'expo-font';

const fetchFonts = async () =>
  await Font.loadAsync({
    "Corporate S Regular" : require('./assets/fonts/Corporate_S_Regular.otf'),
    "Corporate S Light" : require('./assets/fonts/Corporate_S_Light.otf'),
    "Corporate S Bold" : require('./assets/fonts/Corporate_S_Bold.otf'),
  });
