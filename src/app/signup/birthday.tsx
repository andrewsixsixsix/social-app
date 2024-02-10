import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import DatePicker from 'react-native-date-picker';

import { Button } from '@/components';
import { signupStyles, useTheme } from '@/styles';
import { useAppDispatch } from '@/store/hooks';
import { dateOfBirth } from '@/store/slices/auth';

const maximumDate = () => {
  const year = new Date().getFullYear() - 5;
  const month = new Date().getMonth();
  const day = new Date().getDate();
  return new Date(year, month, day);
};
const minimumDate = () => {
  const year = new Date().getFullYear() - 100;
  const month = new Date().getMonth();
  const day = new Date().getDate();
  return new Date(year, month, day);
};

const Birthday = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [birthday, setBirthday] = useState<Date>(new Date(2000, 0, 1));

  const submit = () => {
    const utcDate = new Date(
      Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate()),
    );
    const dateString = utcDate.toISOString().split('T')[0];
    dispatch(dateOfBirth(dateString));
    router.navigate('/signup/password');
  };

  return (
    <View style={[signupStyles.container, { backgroundColor: theme.background }]}>
      <DatePicker
        date={birthday}
        maximumDate={maximumDate()}
        minimumDate={minimumDate()}
        mode={'date'}
        onDateChange={setBirthday}
      />
      <Button title={'Next'} onPress={submit} />
    </View>
  );
};

export default Birthday;
