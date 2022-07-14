import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../lib/theme-settings';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Texting from './index';
const TextingGradient = ({
  align = 'center',
  selectColor = [colors.primary, colors.secondary],
  children,
  fontSize,
  weight,
}) => {
  selectColor = selectColor || [colors.primary, colors.secondary];
  return (
    <View>
      <MaskedView
        style={{alignSelf: 'center'}}
        maskElement={
          <Texting
            weight={weight}
            fontSize={fontSize}
            align={align}
            color={colors}>
            {children}
          </Texting>
        }>
        <LinearGradient
          colors={selectColor}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Texting
            weight={weight}
            fontSize={fontSize}
            align={align}
            style={{opacity: 0}}>
            {children}
          </Texting>
        </LinearGradient>
      </MaskedView>
    </View>
  );
};

export default TextingGradient;
