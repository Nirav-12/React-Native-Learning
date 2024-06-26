import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const DrawerMoments = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={{ color: "#aa1bea", fontSize: 40 }}>
                Moments Screen
            </Text>
            <Icon name="timer-outline"
                size={80} color="#aa1bea" />
        </View>
    )
}
export default DrawerMoments;