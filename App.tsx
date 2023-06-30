import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { COLOR_PRIMARY, fonts } from './src/helpers/styles/StyleConstants';
import { useFonts } from './src/hooks/styleHooks';
import { LocationInfoBar } from './src/components/LocationInfoBar';

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <LocationInfoBar />
      <Text style={fonts.regularFont}>Hello</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
