import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NaviButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NaviButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0088cc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})