import React from 'react';
import { View, Text , StyleSheet } from 'react-native';

const AccountScreen = () => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AccountScreen</Text>
      </View>
    );
  
}
export default AccountScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#F6546A',
  },
  text :  {
    fontWeight: 'bold',
    fontSize: 20,
  },
})