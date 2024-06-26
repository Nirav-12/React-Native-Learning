import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/views/screens/HomeScreen';
import Week1Navigation from './src/views/navigations/Week1Navigation';
import Week2Navigation from './src/views/navigations/Week2Navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Week1" component={Week1Navigation} />
        <Stack.Screen name="Week2" component={Week2Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
