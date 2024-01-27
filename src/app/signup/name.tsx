import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@components';
import { regex } from '@constants';

interface IFormData {
  firstName: string;
  lastName: string;
}

const nameRules = {
  pattern: {
    value: regex.name,
    message: 'Invalid name',
  },
  maxLength: {
    value: 32,
    message: 'Max length is 32 characters',
  },
};
const firstNameRules = {
  ...nameRules,
  required: {
    value: true,
    message: 'First name is required',
  },
};
const lastNameRules = {
  ...nameRules,
  required: false,
};

const Name = () => {
  const form = useForm<IFormData>({ defaultValues: { firstName: '', lastName: '' } });
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const submit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    router.navigate('/signup/password');
  };

  const disabled = Object.keys(errors).length > 0;

  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <FormInput
          autoCapitalize={'words'}
          autoCorrect={false}
          name={'firstName'}
          placeholder={'First name'}
          rules={firstNameRules}
        />
        <FormInput
          autoCapitalize={'words'}
          autoCorrect={false}
          name={'lastName'}
          placeholder={'Last name (optional)'}
          rules={lastNameRules}
        />
        <Button disabled={disabled} title={'Next'} onPress={handleSubmit(submit)} />
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

export default Name;
