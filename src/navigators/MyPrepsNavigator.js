import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePrepsScreen from '../screens/CreatePreps/CreatePrepsScreen';
import MyPrepsScreen from '../screens/MyPreps/MyPrepsScreen';

const Stack = createStackNavigator();

const MyPrepsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyPreps"
      component={MyPrepsScreen}
      options={{ title: 'My Preps' }}
    />
    <Stack.Screen
      name="CreatePrepsScreen"
      component={CreatePrepsScreen}
      options={{ title: 'Prep Details' }}
    />
  </Stack.Navigator>
);

export default MyPrepsNavigator;
