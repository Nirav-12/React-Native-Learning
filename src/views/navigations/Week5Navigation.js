import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen } from "react-native-screens";
import Week5Screen from "../screens/Week5Screen";
import SQLiteScreen from "../screens/pages/SQLiteScreen";
import FileShareScreen from "../screens/FileShareScreen";
import APICallingScreen from "../screens/APICallingScreen";
import ShareScreen from "../screens/ShareScreen";
import ShareDefault from "../screens/ShareDefault";
import GalleryScreen from "../screens/GalleryScreen";
import ZoomImage from "../screens/ZoomImage";
import AxiosAPIScreen from "../screens/AxiosAPIScreen";
import ApiFetchLocal from "../screens/ApiFetchLocal";
import ApiAxiosLocal from "../screens/ApiAxiosLocal";
import DemoApiScreen from "../screens/DemoApiScreen";

const Stack = createNativeStackNavigator();

const Week5 = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Week5Screen' component={Week5Screen}/>
            <Stack.Screen name='SQLite' component={SQLiteScreen}/>
            <Stack.Screen name='API' component={APICallingScreen}/>
            <Stack.Screen name='FileShare' component={FileShareScreen}/>
            <Stack.Screen name='Share' component={ShareScreen}/>
            <Stack.Screen name='ShareDefault' component={ShareDefault}/>
            <Stack.Screen name='Gallery' component={GalleryScreen}/>
            <Stack.Screen name='ZoomImage' component={ZoomImage}/>
            <Stack.Screen name='AxiosScreen' component={AxiosAPIScreen}/>
            <Stack.Screen name='localFetch' component={ApiFetchLocal}/>
            <Stack.Screen name='localAxios' component={ApiAxiosLocal}/>
            <Stack.Screen name='DemoApi' component={DemoApiScreen}/>
        </Stack.Navigator>
    )
}
export default Week5;