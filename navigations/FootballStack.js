import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FootballScreen from '../screens/FootballScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import FootballCreate from '../screens/FootballCreate';
import FootballDetail from '../screens/FootballDetail';
import OthersProfileScreen from '../screens/OthersProfileScreen';


export default function FootballStack() {
  const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="Football Home" component={FootballScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail Football" component={FootballDetail} options={{ headerShown: false }}/>
        <Stack.Screen name="Create Football" component={FootballCreate} options={{ headerShown: false }}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Edit" component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}