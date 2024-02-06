import { StyleSheet, Text, View } from 'react-native';

import { Button, Social } from '@/components';
import { fonts, signupStyles, useTheme } from '@/styles';
import { s } from '@/utils';
import { Theme } from '@/types';

const Finish = () => {
  const styles = getStyles(useTheme());
  const email = 'email@mail.com';

  const submit = () => {};

  return (
    <View style={[signupStyles.container, styles.container]}>
      <Text style={[styles.text, styles.title]}>Almost done!</Text>
      <Text style={styles.text}>
        {'Tap the button below to complete the signup and join\n'}
        <Social fontSize={40} />
      </Text>
      <Text style={styles.text}>{`We will send you a verification email to\n${email}`}</Text>
      <Button title={'Finish'} onPress={submit} />
    </View>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingHorizontal: s(20),
    },
    text: {
      color: theme.text,
      fontFamily: fonts.montserratRegular,
      fontSize: s(14),
      textAlign: 'center',
    },
    title: {
      fontSize: s(24),
    },
  });

export default Finish;
