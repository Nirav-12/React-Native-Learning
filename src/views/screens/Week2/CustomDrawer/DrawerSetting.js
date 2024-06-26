import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerSetting= () => {
 
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Text style={{ color: "#aa1bea", fontSize: 40 }}>
            Setting Screen
        </Text>
        <Icon name="settings-outline"
            size={80} color="#aa1bea" />
    </View>
    );
}
export default DrawerSetting;