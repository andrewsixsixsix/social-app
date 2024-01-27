import React from 'react';
import { Keyboard } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context/src/SafeAreaView';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cStyles } from '@styles';

export const SafeArea: React.FC<SafeAreaViewProps> = ({ children, style, ...props }) => {
  const onResponderGrant = () => Keyboard.dismiss();

  const onStartShouldSetResponder = () => true;

  // TODO: safe area background color should be set depending on theme

  return (
    <SafeAreaView
      style={[cStyles.safeArea, style]}
      onResponderGrant={onResponderGrant}
      onStartShouldSetResponder={onStartShouldSetResponder}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
