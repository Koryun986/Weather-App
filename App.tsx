import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { fonts } from './src/helpers/StyleConstants';

const fetchFonts = () =>
  Font.loadAsync({
    "Corporate S Regular" : require('./assets/fonts/Corporate_S_Regular.otf'),
    "Corporate S Light" : require('./assets/fonts/Corporate_S_Light.otf'),
    "Corporate S Bold" : require('./assets/fonts/Corporate_S_Bold.otf'),
  });

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    ... fonts.regularFont,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
