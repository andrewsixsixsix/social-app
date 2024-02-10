import { View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { UseControllerProps } from 'react-hook-form/dist/types/controller';

import { Button, FormInput } from '@/components';
import { signupStyles, useTheme } from '@/styles';
import { useAppDispatch } from '@/store/hooks';
import { password } from '@/store/slices/auth';

interface IFormData extends Record<string, string> {
  password: string;
  passwordConfirmation: string;
}

type TPasswordConfirmationRules = UseControllerProps<
  Record<keyof IFormData, IFormData[keyof IFormData]>,
  'passwordConfirmation'
>['rules'];

const passwordRules = {
  required: {
    value: true,
    message: 'Password is required',
  },
  minLength: {
    value: 8,
    message: 'Min length is 8 characters',
  },
  maxLength: {
    value: 64,
    message: 'Max length is 64 characters',
  },
};
const passwordConfirmationRules: TPasswordConfirmationRules = {
  ...passwordRules,
  required: {
    value: true,
    message: 'Password confirmation is required',
  },
  validate: (value, formValues) => value === formValues.password || "Passwords don't match",
};

const Password = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const form = useForm<IFormData>({ defaultValues: { password: '', passwordConfirmation: '' } });
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const submit: SubmitHandler<IFormData> = (data) => {
    dispatch(password({ ...data }));
    router.navigate('/signup/finish');
  };

  const disabled = Object.keys(errors).length > 0;

  return (
    <View style={[signupStyles.container, { backgroundColor: theme.background }]}>
      <FormProvider {...form}>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          name={'password'}
          placeholder={'Password'}
          rules={passwordRules}
          secureTextEntry={true}
        />
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          name={'passwordConfirmation'}
          placeholder={'Password confirmation'}
          rules={passwordConfirmationRules}
          secureTextEntry={true}
        />
        <Button disabled={disabled} title={'Next'} onPress={handleSubmit(submit)} />
      </FormProvider>
    </View>
  );
};

export default Password;
