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
      case '/signup/name':
        screenTitle = 'Name';
        break;
      case '/signup/birthday':
        screenTitle = 'Birthday';
        break;
      case '/signup/password':
        screenTitle = 'Password';
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
