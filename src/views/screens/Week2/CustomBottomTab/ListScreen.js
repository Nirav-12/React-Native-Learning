import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';

const ListScreen = () => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ListScreen</Text>
      </View>
    );
  
}
export default ListScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#CBB0B0',
  },
  text :  {
    fontWeight: 'bold',
    fontSize: 20,
  },
})