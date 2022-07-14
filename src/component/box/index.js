import React from 'react';
import Texting from '../text';
import {StyleSheet, View, Dimensions} from 'react-native';
import Button from '../button';
import {colors} from '../../lib/theme-settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Slider} from '@miblanchard/react-native-slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Boxing = ({value, setValue, title, min, max, step, style}) => {
  return (
    <View style={[styles.boxes, {...style}]}>
      <Texting>{title}</Texting>
      <Texting fontSize={45}>{value}</Texting>
      <View style={styles.boxesFooter}>
        <Button
          style={{
            backgroundColor: colors.secondary,
            height: 40,
            width: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (value != 0) {
              setValue(value - step);
            }
          }}>
          <Icon name={'minus'} color={colors.white1} />
        </Button>
        <Button
          style={{
            backgroundColor: colors.primary,
            height: 40,
            width: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setValue(value + step)}>
          <Icon name={'plus'} color={colors.white1} />
        </Button>
      </View>
      <Slider
        step={step}
        value={value}
        minimumValue={min}
        maximumValue={max}
        onValueChange={val => setValue(val)}
        thumbTintColor={colors.text}
        maximumTrackTintColor={colors.secondary}
        minimumTrackTintColor={colors.primary}
        thumbTouchSize={{width: 10, height: 10}}
      />
    </View>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  top: {
    flexDirection: 'row',
  },
  boxes: {
    height: 170,
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.white2,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    margin: 5,
  },
  boxesFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  calcButton: {
    marginTop: 50,
    padding: 20,
  },
  result: {
    marginBottom: 20,
  },
});
export default Boxing;
