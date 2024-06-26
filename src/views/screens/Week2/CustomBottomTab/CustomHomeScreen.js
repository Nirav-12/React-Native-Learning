import React, { Component } from 'react';
import { View, Text , StyleSheet } from 'react-native';

const CustomHomeScreen = () =>{
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    );
  }
  export default CustomHomeScreen;

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#66CDAA',

  },
  text : {
    fontSize:20,
    fontWeight: 'bold',
  },
})