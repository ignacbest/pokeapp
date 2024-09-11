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
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon as={MaterialIcons} name="home" color="tomato" size={5} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPokemons}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
            <Icon as={MaterialIcons} name="favorite" color="tomato" size={5} />
          ),
        }}
      />
      <Tab.Screen
       name="Settings"
       component={Settings}
       options={{
         tabBarLabel: 'Settings',
         tabBarIcon: () => (
           <Icon as={MaterialIcons} name="settings" color="tomato" size={5} />
         ),
       }}  
     />
    </Tab.Navigator>
  )
}

export default TabNavigator;