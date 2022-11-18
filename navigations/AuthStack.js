import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScren from '../screens/RegisterScren';


export default function AuthStack() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="FunZone" component={OnboardingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="register" component={RegisterScren} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}