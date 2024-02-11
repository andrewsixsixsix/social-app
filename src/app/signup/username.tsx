import { View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@/components';
import { regex } from '@/constants';
import { signupStyles, useTheme } from '@/styles';
import { useAppDispatch } from '@/store/hooks';
import { username } from '@/store/slices/auth';
import { useIsUsernameExistsMutation } from '@/api/user';
import { isApiError } from '@/types/guards';

interface IFormData {
  username: string;
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

const Username = () => {
  const theme = useTheme();

  const [isUsernameExists] = useIsUsernameExistsMutation();
  const dispatch = useAppDispatch();

  const form = useForm<IFormData>({ defaultValues: { username: '' } });
  const {
    formState: { errors },
    handleSubmit,
    setError,
  } = form;

  const submit: SubmitHandler<IFormData> = async (data) => {
    try {
      await isUsernameExists(data).unwrap();
      dispatch(username(data.username));
      router.navigate('/signup/email');
    } catch (err: unknown) {
      if (isApiError(err)) {
        setError('username', { message: err.message });
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
          name={'username'}
          placeholder={'Username'}
          rules={usernameRules}
        />
        <Button disabled={disabled} title={'Next'} onPress={handleSubmit(submit)} />
      </FormProvider>
    </View>
  );
};

export default Username;
