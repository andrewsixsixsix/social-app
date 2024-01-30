import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { fonts } from '@styles';
import { s, sh } from '@utils';

interface IProps {
  fontSize: number;
}

export const Social: React.FC<IProps> = ({ fontSize }) => (
  <Text style={[styles.social, { fontSize: s(fontSize) }]}>Social</Text>
);

const styles = StyleSheet.create({
  social: {
    fontFamily: fonts.greatVibesRegular,
    marginVertical: sh(20),
    paddingHorizontal: s(10),
  },
});
