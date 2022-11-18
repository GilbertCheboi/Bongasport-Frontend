import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GilscoreHome from '../screens/GilscoreHome';
import CreateBaseballPost from '../components/CreateBaseballPost';
import DetailGilscore from '../screens/DetailGilscore';

export default function BaseballStack() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="Baseball Home" component={GilscoreHome} options={{ headerShown: false }}/>
        <Stack.Screen name="Create" component={CreateBaseballPost} />
        <Stack.Screen name="DetailsG" component={DetailGilscore} />
      </Stack.Navigator>
    )
  }