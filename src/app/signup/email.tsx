import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@components';
import { regex } from '@constants';

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

  const next: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    router.navigate('/signup/name');
  };

  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          name={'email'}
          placeholder={'Email'}
          rules={emailRules}
        />
        <Button
          disabled={Object.keys(errors).length > 0}
          title={'Next'}
          onPress={handleSubmit(next)}
        />
      </FormProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    rowGap: 20,
  },
});

export default Email;
