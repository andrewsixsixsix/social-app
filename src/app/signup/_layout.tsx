import { Slot, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignupHeader } from '@components';

const SignupLayout = () => {
  const path = usePathname();

  const getScreenTitle = () => {
    let screenTitle: string;

    switch (path) {
      case '/signup/username':
        screenTitle = 'Username';
        break;
      case '/signup/email':
        screenTitle = 'Email';
        break;
      default:
        screenTitle = '';
    }

    return screenTitle;
  };

  // TODO: handle tap outside to hide keyboard

  return (
    <SafeAreaView>
      <SignupHeader title={getScreenTitle()} />
      <Slot />
    </SafeAreaView>
  );
};

export default SignupLayout;
