import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/formScreen/Screen1";
import Screen2 from "../screens/formScreen/Screen2";
import Screen3 from "../screens/formScreen/Screen3";
import Screen4 from "../screens/formScreen/Screen4";
import Screen5 from "../screens/formScreen/Screen5";

const Stack = createNativeStackNavigator();

const FormNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Screen1" component={Screen1}/>
            <Stack.Screen name="Screen2" component={Screen2}/>
            <Stack.Screen name="Screen3" component={Screen3}/>
            <Stack.Screen name="Screen4" component={Screen4}/>
            <Stack.Screen name="Screen5" component={Screen5}/>
        </Stack.Navigator>
    )
}
export default FormNavigation;