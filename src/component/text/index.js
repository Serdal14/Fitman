import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../lib/theme-settings';

const Texting = ({
  family = 'regular',
  fontSize = 14,
  color = colors.text,
  weight = '400',
  align = 'center',
  style,
  children,
}) => {
  return (
    <Text
      style={[
        styles.family[family],
        {
          fontSize: fontSize,
          textAlign: align,
          color: color,
          fontWeight: weight,
          ...style,
        },
      ]}>
      {children}
    </Text>
  );
};
// Prop'lar için varsayılan değerleri belirtir:
Texting.defaultProps = {
  family: 'regular',
  fontSize: 14,
  weight: '400',
  style: {},
};
const styles = StyleSheet.create({
  family: {
    regular: {
      fontFamily: 'NotoSans-Regular',
    },
    italic: {
      fontFamily: 'NotoSans-Italic',
    },
  },
});
export default Texting;
