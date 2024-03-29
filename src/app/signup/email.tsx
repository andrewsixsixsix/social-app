import { View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@/components';
import { regex } from '@/constants';
import { signupStyles, useTheme } from '@/styles';
import { email } from '@/store/slices/auth';
import { useAppDispatch } from '@/store/hooks';
import { useIsEmailExistsMutation } from '@/api/user';
import { isApiError } from '@/types/guards';

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
  const theme = useTheme();

  const [isEmailExists] = useIsEmailExistsMutation();
  const dispatch = useAppDispatch();

  const form = useForm<IFormData>({ defaultValues: { email: '' } });
  const {
    formState: { errors },
    handleSubmit,
    setError,
  } = form;

  const submit: SubmitHandler<IFormData> = async (data) => {
    try {
      await isEmailExists(data).unwrap();
      dispatch(email(data.email));
      router.navigate('/signup/name');
    } catch (err: unknown) {
      if (isApiError(err)) {
        setError('email', { message: err.message });
      }
    }
  };

  const disabled = Object.keys(errors).length > 0;

  return (
    <View style={[signupStyles.container, { backgroundColor: theme.background }]}>
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
