import React from 'react';
import {ScrollView, View} from 'react-native';
import Texting from '../text';
import Button from '../button';
import Linear from '../text/linear';
import {colors} from '../../lib/theme-settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DefaultLayout from '../layout';
const lastWeight = [
  {
    date: 'today',
    weak: '9.5',
    weight: '100.0',
    success: true,
  },
  {
    date: 'yesterday',
    weak: '1.0',
    weight: '111.5',
    success: false,
  },
  {
    date: '2 days ago',
    weak: '8.0',
    weight: '110.5',
    success: true,
  },

  {
    date: '3 days ago',
    weak: '1.5',
    weight: '118.5',
    success: true,
  },

  {
    date: '3 days ago',
    weak: '0.5',
    weight: '120.0',
    success: true,
  },
];
const HistoryItem = ({history}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white1,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <View>
        <Texting weight={'600'} align={'left'}>
          {history.date}
        </Texting>
        <Texting
          weight={'600'}
          color={history.success ? colors.primary : colors.red}>
          {history.success ? (
            <View style={{marginLeft: 5}}>
              <Icon size={14} color={colors.primary} name={'arrow-down'} />
            </View>
          ) : (
            <View style={{marginLeft: 5}}>
              <Icon size={14} color={colors.red} name={'arrow-up'} />
            </View>
          )}
          {history.weak} kg
        </Texting>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Texting weight={'800'} fontSize={36}>
          {history.weight}
        </Texting>
        <View style={{marginLeft: 4, marginTop: 10}}>
          <Texting weight={'500'} fontSize={15}>
            kg
          </Texting>
        </View>
      </View>
    </View>
  );
};
const HistoryList = props => {
  return (
    <DefaultLayout>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Texting align={'left'} fontSize={25} weight={'600'}>
          History
        </Texting>
        <Button style={{backgroundColor: 'transparent'}}>
          <Linear align={'left'} fontSize={14} weight={'400'}>
            See Also
          </Linear>
        </Button>
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 10}}>
        {lastWeight.map((history, index) => (
          <HistoryItem history={history} key={index} />
        ))}
      </ScrollView>
    </DefaultLayout>
  );
};

export default HistoryList;
