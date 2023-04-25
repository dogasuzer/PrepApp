import React, { useEffect, useState } from 'react';
import awsconfig from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
