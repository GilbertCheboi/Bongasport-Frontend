import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BaseballScreen from '../screens/BaseballScreen';
import BaseballDetail from '../screens/BaseballDetail';
import BaseballCreate from '../screens/BaseballCreate';
import ProfileScreen from '../screens/ProfileScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';

export default function BaseballStack() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="Baseball Home" component={BaseballScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Create Baseball" component={BaseballCreate} options={{headerShown: false}} />
        <Stack.Screen name="Detail Baseball" component={BaseballDetail} options={{headerShown: false}} />
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
  }