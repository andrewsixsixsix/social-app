import { StyleSheet } from 'react-native';

import { fonts } from './fonts';
import { colors } from './colors';
import { s, sh } from '@utils';

export const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontFamily: fonts.montserratRegular,
    fontSize: s(10),
  },
  safeArea: {
    flex: 1,
  },
});

export const signupStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: sh(40),
    rowGap: sh(20),
  },
});
