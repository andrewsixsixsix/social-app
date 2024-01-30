import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@components';
import { regex } from '@constants';
import { colors, signupStyles } from '@styles';

interface IFormData {
  email: string;
}

const emailRules = {
  required: {
    value: true,
    message: 'Email is required',
  },
  pattern: {
    value: regex.email,
    message: 'Invalid email',
  },
  maxLength: {
    value: 64,
    message: 'Max length is 64 characters',
  },
};

const Email = () => {
  const form = useForm<IFormData>({ defaultValues: { email: '' } });
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const submit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    router.navigate('/signup/name');
  };

  const disabled = Object.keys(errors).length > 0;

  return (
    <View style={signupStyles.container}>
      <FormProvider {...form}>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          name={'email'}
          placeholder={'Email'}
          rules={emailRules}
        />
        <Button disabled={disabled} title={'Next'} onPress={handleSubmit(submit)} />
      </FormProvider>
    </View>
  );
};

export default Email;
