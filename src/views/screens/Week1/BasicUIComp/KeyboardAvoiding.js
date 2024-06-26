import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform, StyleSheet , Text } from 'react-native';

export default function MyComponent() {
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.text}>KeyBoardAvoidingView</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type something here"
          style={styles.input}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  text : {
    textAlign: 'center',
    marginBottom : 10,
    fontSize : 18,
    color: 'black',
  },
});
