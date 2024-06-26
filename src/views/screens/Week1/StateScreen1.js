import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  PasswordInput = ({ placeholder }) => {
    return (
      <View style={styles.passContain}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'white'}
          secureTextEntry={!this.state.isPasswordVisible}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={this.togglePasswordVisibility}>
          <Icon
            name={this.state.isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <this.PasswordInput placeholder="Password" />
      </View>
    );
  }
}

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

export default App;
