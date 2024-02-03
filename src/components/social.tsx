import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { fonts, useTheme } from '@styles';
import { s, sh } from '@utils';

interface IProps {
  fontSize: number;
}

export const Social: React.FC<IProps> = ({ fontSize }) => {
  const theme = useTheme();

  return <Text style={[styles.social, { color: theme.text, fontSize: s(fontSize) }]}>Social</Text>;
};

const styles = StyleSheet.create({
  social: {
    fontFamily: fonts.greatVibesRegular,
    marginVertical: sh(20),
    paddingHorizontal: s(10),
  },
});
