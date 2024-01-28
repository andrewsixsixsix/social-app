import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import DatePicker from 'react-native-date-picker';

import { Button } from '@components';

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
const formatDate = (date: Date) => {
  const offset = new Date().getTimezoneOffset();
  date.setTime(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split('T')[0];
};

const Birthday = () => {
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date(2000, 0, 1));

  const submit = () => {
    const date = formatDate(dateOfBirth);
    console.log(date);
    router.navigate('/signup/password');
  };

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    rowGap: 20,
  },
});

export default Birthday;
