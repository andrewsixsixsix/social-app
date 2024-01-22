import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const AppLayout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Slot screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
};

export default AppLayout;
