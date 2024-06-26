import React from 'react';
import { View, Text , Button} from 'react-native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Details") {
            iconName = "details";
          } 

          return (
            <Icon
              name={iconName}
              size={focused ? 25 : 20}
              color={color}
            />
          );
        },
        tabBarLabel: ({ color }) => {
          let label;

          if (route.name === "Home") {
            label = "Home";
          } else if (route.name === "Details") {
            label = "Details";
          } 

          return <Text style={{ color }}>{label}</Text>;
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#c5c5c5",
        tabBarStyle: { backgroundColor: "#006600" , },
        tabBarShowIcon: true,
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        // options={{
        //   // tabBarLabelStyle: {color : "green",},
        //   tabBarIcon: ({ focused, color, size }) => (
        //     <Icon name="home" size={size} color={color} />
        //   ),}}
          />
        <Tab.Screen name="Details" component={DetailsScreen} 
        // options={{
        //   // tabBarLabelStyle: {color : "green",},
        //   tabBarIcon: ({ focused, color, size }) => (
        //     <Icon name="details" size={size} color={color} />
        //   ),}}
          />
      </Tab.Navigator>
    
  );
}

export default BottomTabScreen;