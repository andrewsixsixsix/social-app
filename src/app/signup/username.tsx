import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@components';

interface IFormData {
  username: string;
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

const Username = () => {
  const form = useForm<IFormData>({ defaultValues: { username: '' } });
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const next: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    router.navigate('/signup/email');
  };

  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          name={'username'}
          placeholder={'Username'}
          rules={usernameRules}
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

export default Username;
