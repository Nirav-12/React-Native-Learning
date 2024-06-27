import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LocalAuthentication from 'rn-local-authentication';

const Local = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = async () => {
    try {
      const response = await LocalAuthentication.authenticateAsync({
        reason: 'Please, authenticate!',
        fallbackEnabled: true,
        fallbackToPinCodeAction: true,
      });
      console.log(response);
      if (response.success) {
        Alert.alert('Authenticated successfully');
        console.log('Authenticated successfully');
        setAuthenticated(true);
      } else {
        Alert.alert('Something went wrong');
      }
    } catch (error) {
      if (error.code === 'SystemCancel') {
        Alert.alert('Authentication cancelled');
      } else {
        console.log(error);
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      {!authenticated && (
        <TouchableOpacity onPress={handleAuth} style={styles.button}>
          <Text style={{color: 'white'}}>Authentication</Text>
        </TouchableOpacity>
      )}

      {authenticated && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Authenticated successfully</Text>
        </View>
      )}
    </View>
  );
};

export default Local;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
    width: 200,
    alignItems: 'center',
  },
  successContainer: {
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  successText: {
    color: 'black',
    fontSize: 20,
  },
});
