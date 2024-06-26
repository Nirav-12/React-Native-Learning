import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Week6Screen from "../screens/Week6Screen";
import OrientaionScreen from "../screens/OrientationScreen";
import Localization from "../screens/Localization";
import WebViewScreen from "../screens/WebViewScreen";
import HTMLScreen from "../screens/HTMLScreen";
import Gesture from "../screens/Gesture";
import ThemeScreen from "../screens/ThemeScreen";
import ThemeToggleScreen from "../screens/ThemeToggleScreen";
import PinchZoom from "../screens/PinchZoomScreen";
  
const Stack = createNativeStackNavigator();

const Week6 = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Week6Screen' component={Week6Screen}/>
            <Stack.Screen name='Orientation' component={OrientaionScreen}/>
            <Stack.Screen name='Localization' component={Localization}/>
            <Stack.Screen name='Web' component={WebViewScreen}/>
            <Stack.Screen name='HTML' component={HTMLScreen}/>
            <Stack.Screen name='Gestures' component={Gesture}/>
            <Stack.Screen name='Theme' component={ThemeScreen}/>
            <Stack.Screen name='ThemeToggle' component={ThemeToggleScreen}/>
            <Stack.Screen name='Pinch' component={PinchZoom}/>
        </Stack.Navigator>
    )
}
export default Week6;