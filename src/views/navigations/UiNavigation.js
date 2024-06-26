import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityindicatorScreen from '../screens/ActivityindicatorScreen';
import BasicUiScreen from "../screens/BasicUiScreen";
import ButtonScreen from '../screens/ButtonScreen';
import Flat from '../screens/FlatList';
import ImageComponent from '../screens/ImageComponent';
import ImageBackground from '../screens/ImageBackground';
import KeyboardAvoiding from '../screens/KeyboardAvoiding';
import ModalComponent from '../screens/ModalComponent';
import PressableComponent from '../screens/PressableComponent';
import Refresh from '../screens/Refresh';
import Scroll from '../screens/Scroll';
import SectionListComponent from '../screens/SectionListComponent';
import StatusBar from '../screens/StatusBar';
import SwitchScreen from '../screens/Switchscreen';
import TextScreen from '../screens/TextScreen';
import TextInputScreen from '../screens/TextInputScreen';
import TouchableOpacityScreen from '../screens/TouchableOpacityScreen';
import TouchableHighScreen from '../screens/TouchableHighScreen';
import TouchFeedback from '../screens/TouchFeedback';
import ViewComponent from '../screens/ViewComponent';
import VirtualizedScreen from '../screens/VirtualizedScreen';

const Stack = createNativeStackNavigator();

const UInavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="BasicUi" component={BasicUiScreen}/>
            <Stack.Screen name="Activity" component={ActivityindicatorScreen}/>
            <Stack.Screen name='Button' component={ButtonScreen}/>
            <Stack.Screen name='Flat' component={Flat}/>
            <Stack.Screen name='Image' component={ImageComponent}/>
            <Stack.Screen name='Iamgebackground' component={ImageBackground}/>
            <Stack.Screen name='Keyboard' component={KeyboardAvoiding}/>
            <Stack.Screen name='Modal' component={ModalComponent}/>
            <Stack.Screen name='Press' component={PressableComponent}/>
            <Stack.Screen name='Refresh' component={Refresh}/> 
            <Stack.Screen name='Scroll' component={Scroll}/>
            <Stack.Screen name='Section' component={SectionListComponent}/>
            <Stack.Screen name='Status' component={StatusBar}/>
            <Stack.Screen name='Switch' component={SwitchScreen}/>
            <Stack.Screen name='Text' component={TextScreen}/>
            <Stack.Screen name='TextInput' component={TextInputScreen}/>
            <Stack.Screen name='TouchableOpacity' component={TouchableOpacityScreen}/>
            <Stack.Screen name='TouchHigh' component={TouchableHighScreen}/>
            <Stack.Screen name='TouchFeedback' component={TouchFeedback}/>
            <Stack.Screen name='ViewComponent' component={ViewComponent}/>
            <Stack.Screen name='Virtual' component={VirtualizedScreen}/>
        </Stack.Navigator>
    )
}
export default UInavigation;
