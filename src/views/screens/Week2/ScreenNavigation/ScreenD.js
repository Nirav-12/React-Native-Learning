import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenD = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text> ScreenD </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('ScreenE')} style={styles.button}>
            <Text style={{color:'#fff'}}>Go to Screen E</Text>
        </TouchableOpacity>
      </View>
    );
}
export default ScreenD;

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
