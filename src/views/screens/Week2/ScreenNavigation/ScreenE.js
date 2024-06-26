import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenE = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text> ScreenE </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('ScreenC')} style={styles.button}>
            <Text style={{color:'#fff'}}>Go to Screen C</Text>
        </TouchableOpacity>
      </View>
    );
}
export default ScreenE;

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
