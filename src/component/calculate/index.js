import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearButton from '../button/LinearButton';
import Texting from '../text';
import {colors} from '../../lib/theme-settings';
import Button from '../button';
import Linear from '../text/linear';

const Calculate = ({result, calcBMI, setResult}) => {
  return (
    <View style={styles.calcButton}>
      <View style={{flexDirection: 'row'}}>
        <LinearButton
          disabled={!!result}
          style={{flex: 1, marginRight: 5}}
          onPress={calcBMI}>
          <Texting weight={'600'} fontSize={18} color={colors.white1}>
            Let's Begin
          </Texting>
        </LinearButton>
        {result && (
          <Button
            onPress={() => setResult(null)}
            style={{
              flex: 1,
              marginLeft: 5,
              borderWidth: 1,
              borderRadius: 3,
              borderColor: colors.secondary,
              backgroundColor: colors.white2,
              justifyContent: 'center',
            }}>
            <Linear weight={'800'} fontSize={18}>
              Clear
            </Linear>
          </Button>
        )}
      </View>
    </View>
  );
};
let styles = StyleSheet.create({
  calcButton: {
    marginTop: 50,
    padding: 20,
  },
});
export default Calculate;
