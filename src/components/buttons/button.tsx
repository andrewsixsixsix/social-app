import React, { useMemo } from 'react';
import { PressableProps, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '@styles';
import { PressableWrapper } from './pressable-wrapper';
import { s, sh } from '@utils';

interface IProps extends PressableProps {
  title: string;
}

export const Button: React.FC<IProps> = ({ disabled, title, ...props }) => {
  const styles = useMemo(() => getStyles(disabled), [disabled]);

  return (
    <PressableWrapper disabled={disabled} styles={styles.pressableWrapper} {...props}>
      <Text style={styles.title}>{title}</Text>
    </PressableWrapper>
  );
};

const getStyles = (disabled: PressableProps['disabled']) =>
  StyleSheet.create({
    pressableWrapper: {
      backgroundColor: disabled ? colors.disabled : colors.black,
      borderRadius: s(15),
      paddingHorizontal: s(20),
      paddingVertical: sh(10),
    },
    title: {
      color: colors.white,
      fontFamily: fonts.montserratRegular,
      fontSize: s(20),
      textTransform: 'uppercase',
    },
  });
