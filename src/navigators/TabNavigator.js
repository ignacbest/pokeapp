import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "react-native-vector-icons";


import Home from '../features/Home/containers';
import FavoritesPokemons from '../features/Favorites/containers';
import Settings from '../features/Settings/containers';
import { Icon } from 'native-base';

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon as={MaterialIcons} name="home" color="blue.500" size={5} />
          ),
        }}  
        />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPokemons}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
            <Icon as={MaterialIcons} name="favorite" color="blue.500" size={5} />
          ),
        }}  
      />
      <Tab.Screen
       name="Settings"
       component={Settings}
       options={{
         tabBarLabel: 'Settings',
         tabBarIcon: () => (
           <Icon as={MaterialIcons} name="settings" color="blue.500" size={5} />
         ),
       }}  
     />
    </Tab.Navigator>
  )
}

export default TabNavigator;