import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

function Example() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button pressed!')}>
        <Text style={styles.text}>Press me!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.disabledButton]} disabled>
        <Text style={[styles.text, styles.disabledText]}>Disabled button</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => Alert.alert('Button pressed!')}>
        <Text style={styles.text}>Custom active opacity</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Text style={styles.text}>Custom hit slop</Text>
      </TouchableOpacity> */}
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
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    textDecorationLine: 'line-through',
  },
});

export default Example;
