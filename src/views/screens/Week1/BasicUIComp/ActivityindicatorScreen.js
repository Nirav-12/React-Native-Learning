import React from 'react';
import { View, Text , ActivityIndicator , StyleSheet} from 'react-native';

const ActivityindicatorScreen = () => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Activityindicator</Text>
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  }

  export default ActivityindicatorScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text : {
    fontWeight: 'bold',
    fontSize: 25,
  },
})