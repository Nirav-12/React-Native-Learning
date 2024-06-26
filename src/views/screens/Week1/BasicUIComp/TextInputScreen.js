import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function Example() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        placeholder="Enter text here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
});

export default Example;
