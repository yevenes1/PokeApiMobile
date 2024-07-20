// App.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginNavigator from '../login/navigator/navigator';
import HomeNavigator from '../home/navigator/navigator';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginNavigator">
        <Stack.Screen name="LoginNavigator" component={LoginNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}