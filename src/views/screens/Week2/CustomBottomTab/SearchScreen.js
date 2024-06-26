import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';

const SearchScreen = () => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SearchScreen</Text>
      </View>
    );
  
}
export default SearchScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#FFD700',
  },
  text :  {
    fontWeight: 'bold',
    fontSize: 20,
  },
})
