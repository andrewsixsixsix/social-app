import { StyleSheet, Text, View } from 'react-native';

export const SignupHeader = () => {
  return (
    <View style={styles.container}>
      <Text>Back</Text>
      <Text>Logo first Letter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
});
