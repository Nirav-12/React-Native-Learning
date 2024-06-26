import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DebugScreen = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    debugger;
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Week 1 Tasks</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Debugging</Text>
        <Button title="Press me!" onPress={handleClick} />
        <Text style={styles.counter}>{count}</Text>
      </View>
    </View>
  );
};

export default DebugScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0088cc',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counter: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
