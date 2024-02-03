import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { colors, fonts, useTheme } from '@styles';
import React from 'react';
import { s, sh } from '@utils';
import { Theme } from '@types';

interface IProps {
  title: string;
}

export const SignupHeader: React.FC<IProps> = ({ title }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Ionicons.Button
        activeOpacity={0.6}
        backgroundColor={colors.transparent}
        color={theme.primary}
        style={{ padding: 0 }}
        iconStyle={{ marginRight: 0 }}
        name={'arrow-back'}
        size={s(30)}
        underlayColor={colors.transparent}
        onPress={() => router.back()}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.logo}>S</Text>
    </View>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: s(15),
      paddingRight: s(10),
      paddingVertical: sh(5),
      width: '100%',
    },
    logo: {
      color: theme.primary,
      fontFamily: fonts.greatVibesRegular,
      fontSize: s(30),
      paddingRight: s(5),
    },
    title: {
      color: theme.text,
      fontFamily: fonts.montserratRegular,
      fontSize: s(20),
    },
  });
