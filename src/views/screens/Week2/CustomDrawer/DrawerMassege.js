import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerMessage = () => {
 
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Text style={{ color: "#aa1bea", fontSize: 40 }}>
            Massage Screen
        </Text>
        <Icon name="chatbox-ellipses-outline"
            size={80} color="#aa1bea" />
    </View>
    );
}
export default DrawerMessage;