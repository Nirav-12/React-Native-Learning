import React, {useState} from 'react';
import {View, Alert, StyleSheet, Text} from 'react-native';
import CustomButton from '../../components/CustomComponent';

const MyScreen = () => {
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Press me" onPress={handlePress} />
      <Text style={styles.text}>Button is pressed {counter} times</Text>
    </View>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
