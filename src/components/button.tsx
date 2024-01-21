import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '@styles';

interface IProps extends PressableProps {
  title: string;
}

type TStyles = PressableProps['style'];

export const Button: React.FC<IProps> = ({ title, ...props }) => {
  const styles: TStyles = ({ pressed }) => ({
    backgroundColor: props.disabled ? colors.disabled : colors.black,
    borderRadius: 15,
    opacity: pressed ? 0.6 : 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  });

  return (
    <Pressable style={styles} {...props}>
      <Text style={contentStyles.title}>{title}</Text>
    </Pressable>
  );
};

const contentStyles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: fonts.montserratRegular,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
