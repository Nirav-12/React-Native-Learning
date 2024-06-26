import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenA = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text> ScreenA </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('ScreenB')} style={styles.button}>
            <Text style={{color:'#fff'}}>Go to Screen B</Text>
        </TouchableOpacity>
      </View>
    );
}
export default ScreenA;

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
