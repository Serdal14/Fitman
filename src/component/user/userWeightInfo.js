import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../lib/theme-settings';
import Texting from '../text';

const UserWeightInfo = () => {
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <View style={[style.boxing, {marginRight: 10}]}>
        <Texting color={colors.red} weight={'800'} fontSize={18}>
          120.0 kg
        </Texting>
        <Texting fontSize={10}>Jan 2022 (start)</Texting>
      </View>
      <View style={[style.boxing, {flex: 1.3, paddingTop: 5}]}>
        <Texting color={colors.secondary} weight={'800'} fontSize={28}>
          102.5 kg
        </Texting>
        <Texting fontSize={10}>Apr 2022 (Now)</Texting>
      </View>
      <View style={[style.boxing, {marginLeft: 10}]}>
        <Texting color={colors.primary} weight={'800'} fontSize={18}>
          66.5 kg
        </Texting>
        <Texting fontSize={10}>Oct 2022 (Target)</Texting>
      </View>
    </View>
  );
};
let style = StyleSheet.create({
  boxing: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white2,
    borderRadius: 8,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    paddingTop: 12,
    height: 70,
  },
});
export default UserWeightInfo;
