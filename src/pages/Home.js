import React from 'react';
import DefaultLayout from '../component/layout';
import UserComp from '../component/user/userComp';
import HistoryList from '../component/history';
import UserWeightInfo from '../component/user/userWeightInfo';
const HomeScreen = ({navigation}) => {
  return (
    <DefaultLayout>
      <UserComp />
      <UserWeightInfo />
      <HistoryList />
    </DefaultLayout>
  );
};

export default HomeScreen;
