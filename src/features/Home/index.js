import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from "../../features/Home/containers/index";
import Favorites from "../../features/Favorites/containers/index";

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
