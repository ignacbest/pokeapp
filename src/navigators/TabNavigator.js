import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../features/Home/containers';
import Settings from '../features/Settings/containers'

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default TabNavigator;