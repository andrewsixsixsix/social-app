import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { colors } from '@styles';

interface IProps extends PressableProps {
  title: string;
}

type TStyles = PressableProps['style'];

export const Button: React.FC<IProps> = ({ title, onPress }) => {
  const style: TStyles = ({ pressed }) => ({
    backgroundColor: colors.black,
    borderRadius: 15,
    opacity: pressed ? 0.6 : 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  });

  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={contentStyles.title}>{title}</Text>
    </Pressable>
  );
};

const contentStyles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
