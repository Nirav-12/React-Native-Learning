import React from "react"; 
import {} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Week3Screen from "../screens/Week3Screen"
import DropDownScreen from "../screens/DropDownScreen";
import DateTimeScreen from "../screens/DateTimeScreen";
import MaterialMenuScreen from "../screens/MaterialMenuScreen";
import AuthScreen from "../screens/AuthScreen";
import OtpScreen from "../screens/OtpScreen";
import GoogleScreen from "../screens/GoogleScreen";
import FacebookScreen from "../screens/FacebookScreen";

 
const Stack = createNativeStackNavigator();

const Week1Navigation = () => {
  return(
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="week3" component={Week3Screen}/>
        <Stack.Screen name="DropDown" component={DropDownScreen}/>
        <Stack.Screen name="DateTime" component={DateTimeScreen}/>
        <Stack.Screen name="MaterialMenu" component={MaterialMenuScreen}/>
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="Otp" component={OtpScreen}/>
        <Stack.Screen name="Google" component={GoogleScreen}/>
        <Stack.Screen name="Facebook" component={FacebookScreen}/>
      </Stack.Navigator>
    
  )
}

export default Week1Navigation;





