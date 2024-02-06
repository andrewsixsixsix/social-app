import React from 'react';
import { PressableProps, StyleSheet, Text } from 'react-native';

import { fonts, useTheme } from '@/styles';
import { PressableWrapper } from './pressable-wrapper';
import { s, sh } from '@/utils';
import { Theme } from '@/types';

interface IProps extends PressableProps {
  title: string;
}

export const Button: React.FC<IProps> = ({ disabled, title, ...props }) => {
  const theme = useTheme();
  const styles = getStyles(disabled, theme);

  return (
    <PressableWrapper disabled={disabled} styles={styles.pressableWrapper} {...props}>
      <Text style={styles.title}>{title}</Text>
    </PressableWrapper>
  );
};

const getStyles = (disabled: PressableProps['disabled'], theme: Theme) =>
  StyleSheet.create({
    pressableWrapper: {
      backgroundColor: disabled ? theme.disabled : theme.primary,
      borderRadius: s(15),
      paddingHorizontal: s(20),
      paddingVertical: sh(10),
    },
    title: {
      color: theme.buttonText,
      fontFamily: fonts.montserratRegular,
      fontSize: s(20),
      textTransform: 'uppercase',
    },
  });
