import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
import ScreenD from './ScreenD';
import ScreenE from './ScreenE';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
      <Stack.Screen name="ScreenD" component={ScreenD} />
      <Stack.Screen name="ScreenE" component={ScreenE} />
    </Stack.Navigator>
  );
};
export default ScreenNavigation;
