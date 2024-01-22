import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, FormInput } from '@components';
import { colors, cStyles, fonts } from '@styles';

interface IFormData {
  username: string;
  password: string;
}

const usernameRules = {
  required: { value: true, message: 'Username is required' },
  pattern: {
    value: /^(?!.*(\.)\1)[A-Za-z_][A-Za-z0-9_.]{3,}$/,
    message: 'Invalid username',
  },
  minLength: {
    value: 4,
    message: 'Min length is 4 characters',
  },
};
const passwordRules = {
  required: { value: true, message: 'Password is required' },
  minLength: { value: 8, message: 'Min length is 8 characters' },
};

const Login = () => {
  const form = useForm<IFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const login: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={cStyles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Social</Text>
        <View style={styles.inputs}>
          <FormProvider {...form}>
            <FormInput
              autoCapitalize={'none'}
              autoCorrect={false}
              containerStyle={styles.input}
              name={'username'}
              placeholder={'Username'}
              rules={usernameRules}
            />
            <FormInput
              autoCapitalize={'none'}
              autoCorrect={false}
              containerStyle={styles.input}
              name={'password'}
              placeholder={'Password'}
              rules={passwordRules}
              secureTextEntry={true}
            />
          </FormProvider>
          <Button
            disabled={Object.keys(errors).length != 0}
            title={'Log in'}
            onPress={handleSubmit(login)}
          />
        </View>
        <View style={styles.signupPrompt}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Link href={'/signup/username'} style={[styles.text, styles.link]}>
            Sign up!
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    width: '100%',
  },
  input: {
    width: '70%',
  },
  inputs: {
    alignItems: 'center',
    rowGap: 20,
    width: '100%',
  },
  link: {
    textDecorationLine: 'underline',
  },
  signupPrompt: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    color: colors.black,
    fontFamily: fonts.montserratRegular,
    fontSize: 14,
  },
  title: {
    fontFamily: fonts.greatVibesRegular,
    fontSize: 60,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});

export default Login;
