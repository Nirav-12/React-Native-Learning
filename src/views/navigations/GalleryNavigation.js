import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "../screens/Gallery";
import PhotosScreen from "../screens/PhotosScreen";
 
const Stack = createNativeStackNavigator();

const Gallerynavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='GalleryTo' component={Gallery}/>
            <Stack.Screen name='Photos' component={PhotosScreen}/>
        </Stack.Navigator>
    )
}
export default Gallerynavigation;