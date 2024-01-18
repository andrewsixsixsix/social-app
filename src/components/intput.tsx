import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface IProps extends ViewStyle, TextInputProps {
  containerStyle: StyleProp<TextStyle>;
}

export const Input: React.FC<IProps> = ({ containerStyle, ...props }) => {
  return <TextInput style={[styles.input, containerStyle]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Montserrat-Regular',
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 10,
  },
});
