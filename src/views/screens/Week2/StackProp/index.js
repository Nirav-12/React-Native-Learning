import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackWelcome from './StackWelcome';
import StackSign from './StackSign';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const StackProp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={StackSign}
        options={{
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'orange'},
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={StackWelcome}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTintColor: 'black',
          headerRight: () => <Icon name="settings" size={24} color="black" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackProp;
