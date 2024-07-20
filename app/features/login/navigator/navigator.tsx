// App.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../sign-in/signIn';
import SignUp from '../sign-up/signUp';

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}