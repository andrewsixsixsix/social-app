import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface IProps extends PressableProps {
  children: React.ReactNode;
  styles?: ViewStyle;
}

export const PressableWrapper = ({ children, styles, ...props }: IProps) => (
  <Pressable
    style={({ pressed }) => ({
      opacity: pressed ? 0.6 : 1,
      ...styles,
    })}
    {...props}
  >
    {children}
  </Pressable>
);
