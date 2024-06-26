import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Week1Screen from '../screens/Week1/Week1Screen';
import DebugScreen from '../screens/Week1/DebugScreen';
import UInavigation from './UiNavigation';
import UicomponentScreen from '../screens/Week1/UicomponentScreen';
import LoginScreen from '../screens/Week1/LoginScreen';
import SignupScreen from '../screens/Week1/SignupScreen';
import CustoComScreen from '../screens/Week1/CustoComScreen';
import StateScreen1 from '../screens/Week1/StateScreen1';
import StateScreen from '../screens/Week1/StateScreen';

const Stack = createNativeStackNavigator();

const Week1Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Week1Home" component={Week1Screen} />
      <Stack.Screen name="Debug" component={DebugScreen} />
      <Stack.Screen name="UiNavigation" component={UInavigation} />
      <Stack.Screen name="UIComponent" component={UicomponentScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="CustoCom" component={CustoComScreen} />
      <Stack.Screen name="State" component={StateScreen} />
      <Stack.Screen name="State1" component={StateScreen1} />
    </Stack.Navigator>
  );
};

export default Week1Navigation;
