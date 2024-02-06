import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput, SafeArea, Social } from '@/components';
import { fonts, useTheme } from '@/styles';
import { regex } from '@/constants';
import { s, sh } from '@/utils';
import { Theme } from '@/types';

interface IFormData {
  username: string;
  password: string;
}

const usernameRules = {
  required: {
    value: true,
    message: 'Username is required',
  },
  pattern: {
    value: regex.username,
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

  const styles = getStyles(useTheme());

  const submit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  const disabled = Object.keys(errors).length > 0;

  return (
    <SafeArea>
      <View style={styles.container}>
        <Social fontSize={60} />
        <View style={styles.inputs}>
          <FormProvider {...form}>
            <FormInput
              autoCapitalize={'none'}
              autoCorrect={false}
              name={'username'}
              placeholder={'Username'}
              rules={usernameRules}
            />
            <FormInput
              autoCapitalize={'none'}
              autoCorrect={false}
              name={'password'}
              placeholder={'Password'}
              rules={passwordRules}
              secureTextEntry={true}
            />
          </FormProvider>
          <Button disabled={disabled} title={'Log in'} onPress={handleSubmit(submit)} />
        </View>
        <View style={styles.signupPrompt}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Link href={'/signup/username'} style={[styles.text, styles.link]}>
            Sign up!
          </Link>
        </View>
      </View>
    </SafeArea>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.background,
      flex: 1,
    },
    inputs: {
      alignItems: 'center',
      rowGap: sh(20),
      width: '100%',
    },
    link: {
      textDecorationLine: 'underline',
    },
    signupPrompt: {
      flexDirection: 'row',
      marginTop: sh(20),
    },
    text: {
      color: theme.text,
      fontFamily: fonts.montserratRegular,
      fontSize: s(14),
    },
  });

export default Login;
