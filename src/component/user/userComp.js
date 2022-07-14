import React from 'react';
import {Dimensions, View} from 'react-native';
import Texting from '../text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart} from 'react-native-chart-kit';
import {colors} from '../../lib/theme-settings';
const staticData = [120, 119.5, 115, 112, 108, 100];
const UserComp = props => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          paddingLeft: 10,
          borderBottomWidth: 3,
          borderBottomColor: colors.secondary,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <Texting
            fontSize={22}
            weight={'600'}
            color={colors.text}
            align={'left'}>
            Serdal Akdoğan
          </Texting>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{paddingRight: 5}}
                name={'calendar'}
                size={18}
                color={colors.secondary}
              />
              <Texting
                fontSize={13}
                weight={'500'}
                color={colors.text}
                align={'right'}>
                09.06.2022
              </Texting>
            </View>
            <Texting
              fontSize={12}
              align={'right'}
              weight={'400'}
              color={colors.text}>
              Thursday
            </Texting>
          </View>
        </View>
        <View>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Marc', 'Apr', 'May', 'June'],
              datasets: [
                {
                  data: staticData,
                },
              ],
            }}
            width={Dimensions.get('window').width - 20} // from react-native
            height={220}
            yAxisLabel=""
            withVerticalLines={true}
            withHorizontalLines={true}
            verticalLabelRotation={340}
            horizontalLabelRotation={340}
            yAxisSuffix="w"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: colors.light,
              backgroundGradientFrom: colors.primary,
              backgroundGradientTo: colors.secondary,
              backgroundGradientToOpacity: 1,
              strokeWidth: 2,
              barPercentage: 0.5,
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => colors.white2,
              labelColor: (opacity = 1) => colors.white2,
              style: {
                borderRadius: 5,
              },
              propsForLabels: {
                strokeWidth: '0.5',
                stroke: colors.light,
              },
              propsForDots: {
                r: '8',
                strokeWidth: '3',
                stroke: colors.text,
              },
            }}
            bezier
            style={{
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UserComp;
