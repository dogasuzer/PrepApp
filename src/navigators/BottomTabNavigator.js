import React from 'react';
import ExplorePrepsScreen from '../screens/ExplorePreps/ExplorePrepsScreen';
import MyPrepsNavigator from './MyPrepsNavigator';
import PrepsInProgressScreen from '../screens/MyPreps/PrepsInProgressScreen';
import COLORS from '../Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray100,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
          height: 3
        },
        tabBarOptions: {
          showIcon: true
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant" size={20} color={color} />
          )
        }}
        name="ExplorePrepsScreen"
        component={ExplorePrepsScreen}
      />
      <Tab.Screen
        name="PrepsInProgressScreen"
        component={PrepsInProgressScreen}
        options={{
          tabBarLabel: 'In Progress',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks" size={18} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="MyPrepsNavigator"
        component={MyPrepsNavigator}
        options={{
          tabBarLabel: 'My Preps',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
