import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Week3Screen from '../screens/Week3/Week3Screen';
import DropDownScreen from '../screens/Week3/DropDownScreen';
import DateTimeScreen from '../screens/Week3/DateTimeScreen';
import MaterialMenuScreen from '../screens/Week3/MaterialMenuScreen';
import AuthScreen from '../screens/Week3/AuthScreen';
import OtpScreen from '../screens/Week3/OtpScreen';
import GoogleScreen from '../screens/Week3/GoogleScreen';
import FacebookScreen from '../screens/Week3/FacebookScreen';

const Stack = createNativeStackNavigator();

const Week1Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Week3Home" component={Week3Screen} />
      <Stack.Screen name="DropDown" component={DropDownScreen} />
      <Stack.Screen name="DateTime" component={DateTimeScreen} />
      <Stack.Screen name="MaterialMenu" component={MaterialMenuScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Google" component={GoogleScreen} />
      <Stack.Screen name="Facebook" component={FacebookScreen} />
    </Stack.Navigator>
  );
};

export default Week1Navigation;
