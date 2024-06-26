import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityindicatorScreen from './ActivityindicatorScreen';
import BasicUiScreen from './BasicUiScreen';
import ButtonScreen from './ButtonScreen';
import Flat from './FlatList';
import ImageComponent from './ImageComponent';
import ImageBackground from './ImageBackground';
import KeyboardAvoiding from './KeyboardAvoiding';
import ModalComponent from './ModalComponent';
import PressableComponent from './PressableComponent';
import Refresh from './Refresh';
import Scroll from './Scroll';
import SectionListComponent from './SectionListComponent';
import StatusBar from './StatusBar';
import SwitchScreen from './Switchscreen';
import TextScreen from './TextScreen';
import TextInputScreen from './TextInputScreen';
import TouchableOpacityScreen from './TouchableOpacityScreen';
import TouchableHighScreen from './TouchableHighScreen';
import TouchFeedback from './TouchFeedback';
import ViewComponent from './ViewComponent';
import VirtualizedScreen from './VirtualizedScreen';

const Stack = createNativeStackNavigator();

const UInavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BasicUi" component={BasicUiScreen} />
      <Stack.Screen name="Activity" component={ActivityindicatorScreen} />
      <Stack.Screen name="Button" component={ButtonScreen} />
      <Stack.Screen name="Flat" component={Flat} />
      <Stack.Screen name="Image" component={ImageComponent} />
      <Stack.Screen name="Iamgebackground" component={ImageBackground} />
      <Stack.Screen name="Keyboard" component={KeyboardAvoiding} />
      <Stack.Screen name="Modal" component={ModalComponent} />
      <Stack.Screen name="Press" component={PressableComponent} />
      <Stack.Screen name="Refresh" component={Refresh} />
      <Stack.Screen name="Scroll" component={Scroll} />
      <Stack.Screen name="Section" component={SectionListComponent} />
      <Stack.Screen name="Status" component={StatusBar} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
      <Stack.Screen name="TextInput" component={TextInputScreen} />
      <Stack.Screen
        name="TouchableOpacity"
        component={TouchableOpacityScreen}
      />
      <Stack.Screen name="TouchHigh" component={TouchableHighScreen} />
      <Stack.Screen name="TouchFeedback" component={TouchFeedback} />
      <Stack.Screen name="ViewComponent" component={ViewComponent} />
      <Stack.Screen name="Virtual" component={VirtualizedScreen} />
    </Stack.Navigator>
  );
};
export default UInavigation;
