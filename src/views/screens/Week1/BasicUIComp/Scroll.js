import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function MyComponent() {
  return (
    <ScrollView contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}>
      <View style={styles.box}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 3</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 4</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 5</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 6</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 7</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 8</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  box: {
    backgroundColor: '#3e3e3e',
    width: 200,
    height: 100,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color:'white',
  },
});
