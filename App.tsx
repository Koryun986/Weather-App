import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { COLOR_PRIMARY, fonts } from './src/helpers/styles/StyleConstants';
import { useFonts } from './src/hooks/styleHooks';
import { LocationInfoBar } from './src/components/LocationInfoBar';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { WeatherIcon } from './src/components/WeatherIcon';
import { WeatherInfo } from './src/components/WeatherInfo';
import { WeatherOtherInfo } from './src/components/WeatherOtherInfo';
import { NavigationBar } from './src/components/NavigationBar';

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
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationBar />
        <LocationInfoBar />
        <WeatherIcon />
        <WeatherInfo />
        <WeatherOtherInfo />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
