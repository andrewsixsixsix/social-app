import { Slot, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignupHeader } from '@components';

const SignupLayout = () => {
  return (
    <SafeAreaView>
      <SignupHeader />
      <Slot />
    </SafeAreaView>
  );
};

export default SignupLayout;
