import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackScreen from '../screens/Week2/StackScreen';
import Week2Home from '../screens/Week2';
import BottomTabScreen from '../screens/Week2/BottomTab';
import DrawerScreen from '../screens/Week2/DrawerScreen';
import TopTabScreen from '../screens/Week2/TopTabScreen';
import CustomTopTab from '../screens/Week2/CustomTopTab';
import CustomBottom from '../screens/Week2/CustomBottomTab';
import CustomDrawer from '../screens/Week2/CustomDrawer';
import ScreenNavigation from '../screens/Week2/ScreenNavigation/ScreenNavigation';
import StackProp from '../screens/Week2/StackProp';

const Stack = createNativeStackNavigator();

const Week1Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Week2Home" component={Week2Home} />
      <Stack.Screen name="Stack" component={StackScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabScreen} />
      <Stack.Screen name="Drawer" component={DrawerScreen} />
      <Stack.Screen name="TopTab" component={TopTabScreen} />
      <Stack.Screen name="CustomTopTab" component={CustomTopTab} />
      <Stack.Screen name="CustomBottom" component={CustomBottom} />
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen name="StackProp" component={StackProp} />
      <Stack.Screen name="StackNavigation" component={ScreenNavigation} />
    </Stack.Navigator>
  );
};

export default Week1Navigation;
