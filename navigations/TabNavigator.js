import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';;
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import SettingsScreen from '../screens/SettingsScreen';

import BaseballStack from './BaseballStack';
import FootballStack from './FootballStack';
import ProfileScreen from '../screens/ProfileScreen';




export default function TabNavigator() {
    
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen name="Milan" component={FootballStack} options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ), }} />
        <Tab.Screen name="Notifications" component={Notification}
        options= {{
          headerShown: true,
          tabBarBadge: 6,
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/> */}
      </Tab.Navigator>
  )
}