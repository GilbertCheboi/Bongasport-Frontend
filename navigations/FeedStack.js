import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailNotification from '../screens/DetailNotification';
import BackendTest from '../components/BackendTest';
import CreateFeed from '../components/CreateFeed';
import EditFeed from '../screens/EditFeed';


export default function FeedStack() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Games" component={BackendTest} options={{ headerShown: true }}/>
      <Stack.Screen name="Create" component={CreateFeed} />
      <Stack.Screen name="Details" component={DetailNotification} />
      <Stack.Screen name="Edit" component={EditFeed} />
    </Stack.Navigator>
  )
}