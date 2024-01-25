import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { colors, fonts } from '@styles';
import React from 'react';

interface IProps {
  title: string;
}

export const SignupHeader: React.FC<IProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Ionicons.Button
        activeOpacity={0.6}
        backgroundColor={colors.transparent}
        color={colors.black}
        style={{ padding: 0 }}
        iconStyle={{ marginRight: 0 }}
        name={'arrow-back'}
        size={30}
        underlayColor={colors.transparent}
        onPress={() => router.back()}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.logo}>S</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 5,
    width: '100%',
  },
  logo: {
    color: colors.black,
    fontFamily: fonts.greatVibesRegular,
    fontSize: 30,
    paddingRight: 5,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.montserratRegular,
    fontSize: 20,
  },
});
