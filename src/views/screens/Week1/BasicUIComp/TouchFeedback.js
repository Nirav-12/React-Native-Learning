import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';

function Example() {
  const handlePress = () => {
    Alert.alert('Pressed');
  };

  const handleLongPress = () => {
    Alert.alert('Long Pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress} onLongPress={handleLongPress}>
        <View style={styles.button}>
          <Text style={styles.text}>Press me</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#2196f3',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Example;
