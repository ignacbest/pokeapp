import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import TabNavigator from './TabNavigator';

const AppContainer = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
      <Toast />
    </NativeBaseProvider>
  )
}

export default AppContainer;