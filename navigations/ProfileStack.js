import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import Notification from '../screens/Notification';

export default function ProfileStack() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Edit" component={EditProfile} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
  )
}