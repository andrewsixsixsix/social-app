import { StyleSheet, Text, View } from 'react-native';

import { Button, Social } from '@components';
import { fonts, signupStyles } from '@styles';

const Finish = () => {
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: fonts.montserratRegular,
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default Finish;
