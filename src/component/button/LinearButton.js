import React from 'react';
import {TouchableOpacity} from 'react-native';
import Texting from '../text';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../lib/theme-settings';
const LinearButton = props => {
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          textAlign: 'center',
          borderRadius: 5,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.primary, colors.secondary]}>
        <Texting
          weight={props.weight}
          size={props.fontSize}
          color={props.color}>
          {props.children}
        </Texting>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;
