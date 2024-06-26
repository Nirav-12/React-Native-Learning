import React, { useState , useRef } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity , Alert} from 'react-native';

const RegistrationScreen = () => {

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
    } else if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.');
    }else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
      console.log('Registration successful');
      Alert.alert('Registration successful');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <Text style={styles.txt}>SIGN UP
        </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(name) => setName(name)}
        onSubmitEditing={() => ref_input2.current.focus()}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        keyboardType='email-address'
        onSubmitEditing={() => ref_input3.current.focus()}
        ref={ref_input2}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        onSubmitEditing={() => ref_input4.current.focus()}
        ref={ref_input3}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        autoCapitalize="none"
        ref={ref_input4}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  txt:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:15,
  },
});

export default RegistrationScreen;




