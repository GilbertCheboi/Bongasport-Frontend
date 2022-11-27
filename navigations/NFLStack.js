import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NFLScreen from '../screens/NFLScreen';
import NFLDetail from '../screens/NFLDetail';
import NFLCreate from '../screens/NFLCreate'
import ProfileScreen from '../screens/ProfileScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';

export default function NFLStack() {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="NFL Home" component={NFLScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail NFL" component={NFLDetail} options={{ headerShown: false }}/>
        <Stack.Screen name="Create NFL" component={NFLCreate} options={{ headerShown: false }}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DetailsG" component={DetailGilscore} /> */}
      </Stack.Navigator>
  )
}