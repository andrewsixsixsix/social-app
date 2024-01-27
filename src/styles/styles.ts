import { StyleSheet } from 'react-native';

import { fonts } from './fonts';
import { colors } from './colors';

export const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontFamily: fonts.montserratRegular,
    fontSize: 10,
  },
  safeArea: {
    flex: 1,
  },
});
