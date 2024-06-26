import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerProfile = () => {
 
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Text style={{ color: "#aa1bea", fontSize: 40 }}>
            Profile Screen
        </Text>
        <Icon name="person-outline"
            size={80} color="#aa1bea" />
    </View>
    );
}
export default DrawerProfile;