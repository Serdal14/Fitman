import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../lib/theme-settings';
const Button = props => {
  return (
    <TouchableOpacity style={[styles.btn, {...props.style}]} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    height: 40,
    backgroundColor: colors.white1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
  },
});
export default Button;
