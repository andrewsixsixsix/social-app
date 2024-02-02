import React from 'react';
import { Keyboard } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context/src/SafeAreaView';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cStyles, useTheme } from '@styles';

export const SafeArea: React.FC<SafeAreaViewProps> = ({ children, style, ...props }) => {
  const theme = useTheme();

  const onResponderGrant = () => Keyboard.dismiss();

  const onStartShouldSetResponder = () => true;

  return (
    <SafeAreaView
      style={[cStyles.safeArea, { backgroundColor: theme.background }, style]}
      onResponderGrant={onResponderGrant}
      onStartShouldSetResponder={onStartShouldSetResponder}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
