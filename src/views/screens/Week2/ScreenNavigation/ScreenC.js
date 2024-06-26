import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenC = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text> ScreenC </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('ScreenD')} style={styles.button}>
            <Text style={{color:'#fff'}}>Go to Screen D</Text>
        </TouchableOpacity>
      </View>
    );
}
export default ScreenC;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button : {
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456',
        borderRadius: 15,
    },
})
