import React, { useEffect, useState } from 'react';
import awsconfig from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';
import { Amplify } from 'aws-amplify';
import { Provider } from 'react-redux';
import store from './src/store';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
