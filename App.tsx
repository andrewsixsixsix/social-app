import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input } from '@components';
import { colors, cStyles } from '@styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={cStyles.safeArea}>
        <StatusBar style="auto" />
        <View style={styles.container}>
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
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 60,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
