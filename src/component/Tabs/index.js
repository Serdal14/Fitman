import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/Home';
import BMIScreen from '../../pages/BMIScreen';
import {View, TouchableOpacity} from 'react-native';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextingGradient from '../text/linear';
import {colors} from '../../lib/theme-settings';
function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bmi" component={BMIScreen} />
    </Tab.Navigator>
  );
}
export default BottomTabBar;
const myPages = [
  {
    name: 'home',
    label: 'Home',
    icon: 'home',
  },
  {
    name: 'bmi',
    label: 'BMI',
    icon: 'weight',
  },
];
function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 30,
        borderTopWidth: 3,
        borderTopColor: colors.secondary,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = myPages[index].label;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              flex: 1,
            }}>
            <Icon
              name={myPages[index].icon}
              size={20}
              style={{marginRight: 10}}
              color={isFocused ? colors.primary : colors.secondary}
            />
            <TextingGradient
              selectColor={
                isFocused
                  ? [colors.primary, colors.secondary]
                  : [colors.secondary, colors.primary]
              }>
              {label}
            </TextingGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
