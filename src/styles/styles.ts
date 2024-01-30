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

export const signupStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 40,
    rowGap: 20,
  },
});
