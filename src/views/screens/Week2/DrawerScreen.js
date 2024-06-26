

import React from 'react';
import { View, Text , Button , useWindowDimensions} from 'react-native';
import { createDrawerNavigator} from "@react-navigation/drawer"

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const DetailsScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {

  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    
      <Drawer.Navigator 
      // defaultStatus="open"
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerStyle: isLargeScreen ? null : { width: '70%' },
        overlayColor: 'transparent',
      }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    
  );
}

export default DrawerScreen;