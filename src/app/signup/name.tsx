import { View } from 'react-native';
import { router } from 'expo-router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput } from '@/components';
import { regex } from '@/constants';
import { signupStyles, useTheme } from '@/styles';
import { useAppDispatch } from '@/store/hooks';
import { name } from '@/store/signup/slice';

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
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const form = useForm<IFormData>({ defaultValues: { firstName: '', lastName: '' } });
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const submit: SubmitHandler<IFormData> = (data) => {
    dispatch(name({ firstName: data.firstName, lastName: data.lastName || null }));
    router.navigate('/signup/birthday');
  };

  const disabled = Object.keys(errors).length > 0;

  return (
    <View style={[signupStyles.container, { backgroundColor: theme.background }]}>
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

export default Name;
