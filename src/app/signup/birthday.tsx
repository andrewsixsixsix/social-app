import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import DatePicker from 'react-native-date-picker';

import { Button } from '@/components';
import { signupStyles, useTheme } from '@/styles';

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
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date(2000, 0, 1));

  const submit = () => {
    const utcDate = new Date(
      Date.UTC(dateOfBirth.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate()),
    );
    const dateString = utcDate.toISOString().split('T')[0];
    console.log(dateString);
    router.navigate('/signup/password');
  };

  return (
    <View style={[signupStyles.container, { backgroundColor: theme.background }]}>
      <DatePicker
        date={dateOfBirth}
        maximumDate={maximumDate()}
        minimumDate={minimumDate()}
        mode={'date'}
        onDateChange={setDateOfBirth}
      />
      <Button title={'Next'} onPress={submit} />
    </View>
  );
};

export default Birthday;
