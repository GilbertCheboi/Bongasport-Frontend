import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NBAScreen from '../screens/NBAScreen';
import NBADetail from '../screens/NBADetail';

export default function NBAStack() {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="NBA Home" component={NBAScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail NBA" component={NBADetail} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DetailsG" component={DetailGilscore} /> */}
      </Stack.Navigator>
  )
}