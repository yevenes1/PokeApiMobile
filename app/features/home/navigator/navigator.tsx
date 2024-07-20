// App.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/home';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}