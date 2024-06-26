import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>You have pressed the button {count} times</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
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
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
