import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import PrepDetailsScreen from '../screens/PrepDetails/PrepDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="PrepDetailScreen" component={PrepDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
