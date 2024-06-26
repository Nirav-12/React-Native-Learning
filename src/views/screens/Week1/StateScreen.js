import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const PasswordInput = ({placeholder}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () =>
      setIsPasswordVisible(prevState => !prevState);

    return (
      <View style={styles.passContain}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'white'}
          secureTextEntry={!isPasswordVisible}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PasswordInput placeholder="Password" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#272736',
  },
  passContain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    width: '80%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
