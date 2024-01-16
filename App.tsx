import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontSource, useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

void SplashScreen.preventAutoHideAsync();

const white = '#fff';

export default function App() {
  const map: Record<string, FontSource> = {
    GreatVibes: require('./assets/fonts/GreatVibes-Regular.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  };
  const [fontsLoaded] = useFonts(map);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.title}>Social</Text>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
  text: { fontFamily: 'Montserrat-Regular', fontSize: 16 },
  title: { fontFamily: 'GreatVibes', fontSize: 50, paddingHorizontal: 10 },
});
