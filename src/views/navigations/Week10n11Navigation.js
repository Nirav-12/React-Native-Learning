import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Week10n11Screen from "../screens/Week10n11Screen";
import FormNavigation from "./FormNavigation";
import FirebaseAuth from "../screens/FirebaseAuth";
import RealtimeDatabaseScreen from "../screens/RealtimeDatabaseScreen";
import FirestoreScreen from "../screens/FirestoreScreen"
import FireStorageScreen from "../screens/FireStorageScreen";
import FirebaseAnalyticsScreen from "../screens/FirebaseAnalyticsScreen";
import CrashlyticsScreen from "../screens/CrashlyticsScreen";
import DynamicLinkScreen from "../screens/DynamicLinkScreen";
import PushNotification from "../screens/PushNotification";

const Stack = createNativeStackNavigator();

const Week10n11Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Week10n11Screen" component={Week10n11Screen}/>
            <Stack.Screen name="FormNavigation" component={FormNavigation}/>
            <Stack.Screen name="FirebaseAuth" component={FirebaseAuth}/>
            <Stack.Screen name="RealtimeDatabase" component={RealtimeDatabaseScreen}/>
            <Stack.Screen name="Firestore" component={FirestoreScreen}/>
            <Stack.Screen name="CloudStore" component={FireStorageScreen}/>
            <Stack.Screen name="FireAnalytics" component={FirebaseAnalyticsScreen}/>
            <Stack.Screen name="Crash" component={CrashlyticsScreen}/>
            <Stack.Screen name="Dynamic" component={DynamicLinkScreen}/>
            <Stack.Screen name="PushNotification" component={PushNotification}/>
        </Stack.Navigator>
    )
}
export default Week10n11Navigation;