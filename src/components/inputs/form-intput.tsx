import React, { useMemo } from 'react';
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

import { colors, cStyles, fonts } from '@styles';
import { s, sh } from '@utils';

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

  const styles = useMemo(() => getStyles(error), [error]);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        cursorColor={colors.black}
        style={styles.input}
        {...field}
        onChangeText={field.onChange}
        {...props}
      />
      {error ? <Text style={[cStyles.error, styles.error]}>{error.message}</Text> : null}
    </View>
  );
};

const getStyles = (error: ControllerFieldState['error']) =>
  StyleSheet.create({
    container: {
      width: '70%',
    },
    error: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: sh(-13),
    },
    input: {
      fontFamily: fonts.montserratRegular,
      borderColor: error ? colors.red : colors.black,
      borderRadius: s(15),
      borderWidth: 0.5,
      height: sh(50),
      paddingHorizontal: s(10),
      width: '100%',
    },
  });
