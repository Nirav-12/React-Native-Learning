import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Example() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is a Heading Text</Text>
      <Text style={styles.subHeading}>This is a Sub-Heading Text</Text>
      <Text style={styles.paragraph}>
        This is a Paragraph Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <Text style={styles.caption}>This is a Caption Text</Text>
      <Text style={styles.caption1}>This is a Colourfull Text</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{color:'red' , textAlign:'center',fontWeight:'bold'}}>H</Text>
        <Text style={{color:'blue' , textAlign:'center',fontWeight:'bold'}}>E</Text>
        <Text style={{color:'black' , textAlign:'center',fontWeight:'bold'}}>L</Text>
        <Text style={{color:'brown' , textAlign:'center',fontWeight:'bold'}}>L</Text>
        <Text style={{color:'green' , textAlign:'center',fontWeight:'bold'}}>O</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  caption: {
    fontSize: 12,
    textAlign: 'center',
  },
  caption1: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red'
  },
});

export default Example;
