import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Week9Screen from "../screens/Week9Screen";
import BannerAdScreen from "../screens/BannerAdScreen";
import InterstitialAdScreen from "../screens/InterstitialAdScreen";
import InterstitialVideoAdsScreen from "../screens/InterstitialVideoAdsScreen";
import RewardedScreen from "../screens/RewardedAdScreen";
import RewardedInterstitialAd from "../screens/RewardedInterstitialAd";
import NativeAdvancedAds from "../screens/NativeAdvancedAds";
import FaceBookAdsScreen from "../screens/FaceBookAdsScreen";
import FaceBookInterstitial from "../screens/FaceBookInterstitial";
import FacebookNativeAds from "../screens/FacebookNativeAds";
import FacebookNativeBanner from "../screens/FacebookNativeBanner";
import FacebookRewarded from "../screens/FacebookRewarded";
import FacebookMediumAds from "../screens/FacebookMediumAds";
  
const Stack = createNativeStackNavigator();

const Week9Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Week9Screen' component={Week9Screen}/>
            <Stack.Screen name='Banner' component={BannerAdScreen}/>
            <Stack.Screen name='Interstitial' component={InterstitialAdScreen}/>
            <Stack.Screen name='InterstitialVideo' component={InterstitialVideoAdsScreen}/>
            <Stack.Screen name='RewardScreen' component={RewardedScreen}/>
            <Stack.Screen name='RewardedInterstitial' component={RewardedInterstitialAd}/>
            <Stack.Screen name='NativeAdvanced' component={NativeAdvancedAds}/>
            <Stack.Screen name='FacebookAds' component={FaceBookAdsScreen}/>
            <Stack.Screen name='FaceInter' component={FaceBookInterstitial}/>
            <Stack.Screen name='FaceNative' component={FacebookNativeAds}/>
            <Stack.Screen name='FaceNativeBanner' component={FacebookNativeBanner}/>
            <Stack.Screen name='FaceReward' component={FacebookRewarded}/>
            <Stack.Screen name='FaceMedium' component={FacebookMediumAds}/>
        </Stack.Navigator>
    )
}
export default Week9Navigation;