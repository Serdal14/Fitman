import React, {useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Texting from '../text';
import {colors} from '../../lib/theme-settings';

const Gender = ({result}) => {
  const [gender, setGender] = useState(false);
  return (
    <View style={styles.gender}>
      <Texting fontSize={32} weight={'bold'}>
        Gender
      </Texting>
      <View style={styles.genderArea}>
        <Texting color={!gender ? colors.primary : colors.text} weight={'800'}>
          Male
        </Texting>
        <Switch
          value={gender}
          ios_backgroundColor={colors.white1}
          trackColor={{true: colors.primary, false: colors.secondary}}
          thumbColor={colors.text}
          onValueChange={val => setGender(val)}
        />
        <Texting color={gender ? colors.primary : colors.text} weight={'800'}>
          Female
        </Texting>
      </View>
      <View>
        {result && (
          <View style={styles.result}>
            <Texting
              style={{marginBottom: 10}}
              color={result.color}
              fontSize={33}>
              {result.label}
            </Texting>
            <Texting fontSize={18}>{result.value}</Texting>
          </View>
        )}
      </View>
    </View>
  );
};
let styles = StyleSheet.create({
  gender: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    backgroundColor: colors.white2,
  },
  genderArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  result: {
    marginBottom: 20,
  },
});
export default Gender;
