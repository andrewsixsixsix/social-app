import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { fonts } from '@styles';

interface IProps {
  fontSize: number;
}

export const Social: React.FC<IProps> = ({ fontSize }) => (
  <Text style={[styles.social, { fontSize }]}>Social</Text>
);

const styles = StyleSheet.create({
  social: {
    fontFamily: fonts.greatVibesRegular,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
