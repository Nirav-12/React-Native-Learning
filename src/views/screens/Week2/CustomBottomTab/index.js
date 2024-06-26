import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './AccountScreen';
import SearchScreen from './SearchScreen';
import ListScreen from './ListScreen';
import CustomHomeScreen from './CustomHomeScreen';

const Tab = createBottomTabNavigator();

const CustomBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 20,
          left: 25,
          right: 25,
          elevation: 5,
          backgroundColor: '#5856D6',
          borderRadius: 30,
          height: 60,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={CustomHomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //   top: Platform.OS === 'android' ? 10 : 0,
              }}>
              <Icon
                name="home"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //   top: Platform.OS === 'android' ? 10 : 0,
              }}>
              <Icon
                name="menu"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //   top: Platform.OS === 'android' ? 10 : 0,
              }}>
              <Icon
                name="search"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //   top: Platform.OS === 'android' ? 10 : 0,
              }}>
              <Icon
                name="account-circle"
                size={30}
                color={focused ? 'white' : '#9594e5'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottom;
