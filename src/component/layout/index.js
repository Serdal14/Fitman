import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {colors} from '../../lib/theme-settings';

const DefaultLayout = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };
  return (
    <SafeAreaView
      style={[backgroundStyle, {flex: 1, backgroundColor: colors.light}]}>
      {children}
    </SafeAreaView>
  );
};

export default DefaultLayout;
