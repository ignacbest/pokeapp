import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';

const AppContainer = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default AppContainer;