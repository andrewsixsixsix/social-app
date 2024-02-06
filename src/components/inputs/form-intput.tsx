import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { useController } from 'react-hook-form';
import { ControllerFieldState, UseControllerProps } from 'react-hook-form/dist/types/controller';

import { cStyles, fonts, useTheme } from '@/styles';
import { s, sh } from '@/utils';
import { Theme } from '@/types';

interface IProps extends TextInputProps, UseControllerProps {
  containerStyle?: StyleProp<ViewStyle>;
  defaultValue?: string;
}

export const FormInput: React.FC<IProps> = ({ containerStyle, ...props }) => {
  const { name, rules, defaultValue } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, defaultValue });

  const theme = useTheme();
  const styles = getStyles(error, theme);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        cursorColor={theme.primary}
        placeholderTextColor={theme.placeholder}
        style={styles.input}
        {...field}
        onChangeText={field.onChange}
        {...props}
      />
      {error ? <Text style={[cStyles.error, styles.error]}>{error.message}</Text> : null}
    </View>
  );
};

const getStyles = (error: ControllerFieldState['error'], theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '70%',
    },
    error: {
      alignSelf: 'flex-end',
      color: theme.error,
      position: 'absolute',
      bottom: sh(-13),
    },
    input: {
      color: theme.text,
      fontFamily: fonts.montserratRegular,
      borderColor: error ? theme.error : theme.primary,
      borderRadius: s(15),
      borderWidth: 0.5,
      height: sh(50),
      paddingHorizontal: s(10),
      width: '100%',
    },
  });
