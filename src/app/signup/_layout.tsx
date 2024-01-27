import { Slot, usePathname } from 'expo-router';

import { SafeArea, SignupHeader } from '@components';

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

  return (
    <SafeArea>
      <SignupHeader title={getScreenTitle()} />
      <Slot />
    </SafeArea>
  );
};

export default SignupLayout;
