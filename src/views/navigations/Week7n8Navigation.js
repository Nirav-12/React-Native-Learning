import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Week7n8Screen from "../screens/Week7n8Screen";
import CameraScreen from "../screens/CameraScreen";
import VideoScreen from "../screens/VideoScreen";
import AudioPlayer from "../screens/AudioPlayer";
import VideoPlayer from "../screens/VideoPlayer";
import GetLocalAudio from "../screens/GetLocalAudio";

const Stack = createNativeStackNavigator();

const Week7n8 = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Week7n8Screen' component={Week7n8Screen}/>
            <Stack.Screen name='CameraScreen' component={CameraScreen}/>
            <Stack.Screen name='VideoScreen' component={VideoScreen}/>
            <Stack.Screen name='AudioPlay' component={AudioPlayer}/>
            <Stack.Screen name='VideoPlay' component={VideoPlayer}/>
            <Stack.Screen name='LocalAudio' component={GetLocalAudio}/>
        </Stack.Navigator>
    )
}

export default Week7n8;