import React, {useState} from 'react';
import DefaultLayout from '../component/layout';
import {View, StyleSheet} from 'react-native';
import {colors} from '../lib/theme-settings';

import Gender from '../component/gender';
import Boxing from '../component/box';
import Calculate from '../component/calculate';
const resultData = [
  {value: null, color: colors.red, min: 0, max: 10, label: 'Çok Zayıf'},
  {value: null, color: colors.primary, min: 10, max: 18.15, label: 'Zayıf'},
  {value: null, color: colors.text, min: 18.15, max: 25, label: 'Sağlıklı'},
  {value: null, color: colors.primary, min: 25, max: 30, label: 'Kilolu'},
  {value: null, color: colors.secondary, min: 30, max: 40, label: 'Şişman'},
  {
    value: null,
    color: colors.red,
    min: 40,
    max: 1000,
    label: 'Aşırı Şişman',
  },
];

const SettingsScreen = props => {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [result, setResult] = useState(null);
  const calcBMI = () => {
    let h = height / 100;
    let h2 = h * h;
    let r = weight / h2;
    let res = resultData.find(res => res.min < r && res.max > r);
    res.value = parseFloat(r).toFixed(2);
    setResult(res);
  };
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <View style={styles.top}>
          <Boxing
            title={'Age'}
            value={age}
            setValue={setAge}
            min={1}
            max={99}
            step={1}
            style={{flex: 1}}
          />
          <Boxing
            title={'Weight (Kg)'}
            value={weight}
            setValue={setWeight}
            min={30}
            max={200}
            step={0.5}
            style={{flex: 1}}
          />
        </View>
        <Boxing
          title={'Height (Cm)'}
          value={height}
          setValue={setHeight}
          min={60}
          max={220}
          step={1}
        />
        <Gender result={result} />
        <Calculate result={result} calcBMI={calcBMI} setResult={setResult} />
      </View>
    </DefaultLayout>
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
});
export default SettingsScreen;
