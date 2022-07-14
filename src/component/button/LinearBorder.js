import React from 'react';
import {TouchableOpacity} from 'react-native';
import Texting from '../text';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../lib/theme-settings';
const LinerButton = props => {
  return (
    <LinearGradient
      style={{
        padding: 2,
        textAlign: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
      }}
      locations={[0.1, 0.8, 0.1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 1}}
      colors={[colors.primary, colors.secondary]}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: colors.white1,
        }}
        {...props}>
        {props.children}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LinerButton;
