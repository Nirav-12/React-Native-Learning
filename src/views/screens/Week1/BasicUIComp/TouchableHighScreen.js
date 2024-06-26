import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';

function Example() {
  const onPress = () => {
    Alert.alert('Button pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="#DDDDDD"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Solid Color</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={onPress}
        underlayColor="transparent"
        style={[styles.button, styles.outlinedButton]}
      >
        <Text style={[styles.buttonText, styles.outlinedButtonText]}>Outlined</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={onPress}
        underlayColor="rgba(255, 255, 255, 0.2)"
        style={[styles.button, styles.roundedButton]}
      >
        <Text style={[styles.buttonText, styles.roundedButtonText]}>Rounded</Text>
      </TouchableHighlight>
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
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  outlinedButton: {
    borderWidth: 2,
    borderColor: '#2196F3',
    backgroundColor: 'transparent',
  },
  outlinedButtonText: {
    color: '#2196F3',
  },
  roundedButton: {
    borderRadius: 20,
    backgroundColor: '#4CAF50',
  },
  roundedButtonText: {
    color: '#FFFFFF',
  },
});

export default Example;
