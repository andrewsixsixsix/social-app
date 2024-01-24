import React, { useMemo } from 'react';
import { PressableProps, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '@styles';
import { PressableWrapper } from './pressable-wrapper';

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
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    title: {
      color: colors.white,
      fontFamily: fonts.montserratRegular,
      fontSize: 20,
      textTransform: 'uppercase',
    },
  });
