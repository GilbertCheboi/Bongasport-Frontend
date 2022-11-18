import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NFLScreen from '../screens/NFLScreen';
import NFLDetail from '../screens/NFLDetail';

export default function NFLStack() {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="NFL Home" component={NFLScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail NFL" component={NFLDetail} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DetailsG" component={DetailGilscore} /> */}
      </Stack.Navigator>
  )
}