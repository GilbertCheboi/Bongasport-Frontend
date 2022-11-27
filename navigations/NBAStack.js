import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NBAScreen from '../screens/NBAScreen';
import NBADetail from '../screens/NBADetail';
import NBACreate from '../screens/NBACreate';
import ProfileScreen from '../screens/ProfileScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';

export default function NBAStack() {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="NBA Home" component={NBAScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail NBA" component={NBADetail} options={{ headerShown: false }}/>
        <Stack.Screen name="Create NBA" component={NBACreate} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DetailsG" component={DetailGilscore} /> */}
      </Stack.Navigator>
  )
}