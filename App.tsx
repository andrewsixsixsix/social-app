import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input } from '@components';
import { colors, cStyles, fonts } from '@styles';

void SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={cStyles.safeArea}>
        <StatusBar style="auto" />
        <View style={styles.container} onLayout={onLayout}>
          <Text style={styles.title}>Social</Text>
          <View style={styles.inputs}>
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              containerStyle={{ width: '70%' }}
              placeholder={'Username'}
            />
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              containerStyle={{ width: '70%' }}
              placeholder={'Password'}
            />
            <Button title={'Log in'} onPress={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    width: '100%',
  },
  inputs: {
    alignItems: 'center',
    rowGap: 20,
    width: '100%',
  },
  title: { fontFamily: 'GreatVibes', fontSize: 60, paddingHorizontal: 10, marginVertical: 20 },
});
