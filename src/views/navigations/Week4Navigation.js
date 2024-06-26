import React from "react"; 
import {} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Week4Screen from "../screens/Week4Screen";
import ActionSheetScreen from "../screens/ActionSheetScreen";
import PopoverScreen from "../screens/PopoverScreen";
import ModalScreen from "../screens/ModalScreen";
import CustomPinScreen from "../screens/CustomPinScreen";
import MapLineScreen from "../screens/MapLineScreen";
import CurrentLocationScreen from "../screens/CurrentLocationScreen";
import GetLocationScreen from "../screens/GetLocationScreen";
import ModalScreen2 from "../screens/ModalScreen2";
import ModalScreen3 from "../screens/ModalScreen3";
import ActionSheetModal from "../screens/ActionSheetModal";
import ExampleMap from "../screens/ExampleMap";
import Example from "../screens/Example";

const Stack = createNativeStackNavigator();

const Week1Navigation = () => {
  return(
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="Week4" component={Week4Screen}/>
       <Stack.Screen name="ActionSheet" component={ActionSheetScreen}/>
       <Stack.Screen name="Popover" component={PopoverScreen}/>
       <Stack.Screen name="Modal" component={ModalScreen}/>
       <Stack.Screen name="CustomPin" component={CustomPinScreen}/>
       <Stack.Screen name="MapLine" component={MapLineScreen}/>
       <Stack.Screen name="CurrentLocation" component={CurrentLocationScreen}/>
       <Stack.Screen name="GetLocation" component={GetLocationScreen}/>
       <Stack.Screen name="Modal2" component={ModalScreen2}/>
       <Stack.Screen name="Modal3" component={ModalScreen3}/>
       <Stack.Screen name="ActionSheetModal" component={ActionSheetModal}/>
       <Stack.Screen name='Example' component={ExampleMap}/>
       <Stack.Screen name='Example2' component={Example}/>
      </Stack.Navigator>

    
  )
}

export default Week1Navigation;





