import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDraw from '../../../components/CustomDraw';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerHome from './DrawerHome';
import DrawerProfile from './DrawerProfile';
import DrawerMessage from './DrawerMassege';
import DrawerMoments from './DrawerMoments';
import DrawerSetting from './DrawerSetting';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDraw {...props} />}
      screenOptions={{
        headerTintColor: '#aa1bea',
        headerShown: true,
        drawerActiveBackgroundColor: '#aa1bea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -25, fontSize: 15},
      }}>
      <Drawer.Screen
        name="Home"
        component={DrawerHome}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={DrawerProfile}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={DrawerMessage}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={DrawerMoments}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={DrawerSetting}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default CustomDrawer;
