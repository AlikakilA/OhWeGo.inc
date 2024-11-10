// navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen.js';
import DataScreen from '../Screen/DataScreen.js';

const Tab = createBottomTabNavigator();

// Pour le reste de la navigation, j'ai opté pour le tab, rendant la navigation plus simple
// et fluide et permet de separer la stack Authorisative de celle-ci
// nous donnant accés au deux pages ci-dessous par la route Home
export default function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Data" component={DataScreen} />
    </Tab.Navigator>
  );
}
