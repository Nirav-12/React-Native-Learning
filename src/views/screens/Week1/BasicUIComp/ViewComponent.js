import React from 'react';
import { View, StyleSheet } from 'react-native';

function Example() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={[styles.box, { backgroundColor: '#007aff' }]} />
      <View style={[styles.box, { backgroundColor: '#ff3b30' }]} />
      <View style={[styles.box, { backgroundColor: '#4cd964' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#ffcc00',
  },
});

export default Example;
