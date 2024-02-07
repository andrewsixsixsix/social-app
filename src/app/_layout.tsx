import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@/styles';
import { store } from '@/store';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default AppLayout;
