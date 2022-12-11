import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Formular1Screen from '../screens/Formular1Screen';
import Formular1Detail from '../screens/Formular1Detail';
import Formula1Create from '../screens/Formula1Create';
import ProfileScreen from '../screens/ProfileScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';
import EditProfile from '../screens/EditProfile';


export default function Formular1Stack() {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator>
        <Stack.Screen name="Formular1" component={Formular1Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail F1" component={Formular1Detail} title= "Details"options={{ headerShown: false }}/>
        <Stack.Screen name="Create F1" component={Formula1Create} options={{ headerShown: false }}/>
        <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="otherprofile" component={OthersProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="edit_profile" component={EditProfile} options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}