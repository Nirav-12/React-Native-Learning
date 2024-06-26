import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from './Profile';
import Images from './Images';
import Videos from './Videos';

const Tab = createMaterialTopTabNavigator();

const CustomTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Images') {
            iconName = 'image';
          } else if (route.name === 'Videos') {
            iconName = 'videocam';
          }

          return (
            <Icon name={iconName} size={focused ? 25 : 20} color={color} />
          );
        },
        tabBarLabel: ({color}) => {
          let label;

          if (route.name === 'Profile') {
            label = 'Profile';
          } else if (route.name === 'Images') {
            label = 'Images';
          } else if (route.name === 'Videos') {
            label = 'Videos';
          }

          return <Text style={{color}}>{label}</Text>;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#c5c5c5',
        tabBarStyle: {backgroundColor: '#006600'},
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
      })}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Images" component={Images} />
      <Tab.Screen name="Videos" component={Videos} />
    </Tab.Navigator>
  );
};

export default CustomTopTab;
