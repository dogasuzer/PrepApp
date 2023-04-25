import React from 'react';
import ExplorePrepsScreen from '../screens/ExplorePreps/ExplorePrepsScreen';

import MyPrepsNavigator from './MyPrepsNavigator';
import CreatePrepsScreens from '../screens/CreatePreps/CreatePrepsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PrepsInProgressScreen from '../screens/MyPreps/PrepsInProgressScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExplorePreps" component={ExplorePrepsScreen} />
      <Tab.Screen
        name="PrepsInProgressScreen"
        component={PrepsInProgressScreen}
      />
      <Tab.Screen name="MyPrepsNavigator" component={MyPrepsNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
