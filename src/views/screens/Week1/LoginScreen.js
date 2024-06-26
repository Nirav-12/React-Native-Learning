import React, { Component , createRef} from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert, StyleSheet } from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.passwordInputRef = createRef();
  }

  validate_field = () => {
    const { username, password } = this.state
    if (username == "") {
      Alert.alert("please fill username")
      return false
    }
    else if (password == "") {
      Alert.alert("please fill password")
      return false
    }
    return true
  }

  making_call = () => {
    if (this.validate_field()) {
      alert("successfullly login")
    }
  }


  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.txt}>LOG IN
        </Text>

        <TextInput 
          placeholder={'Username'}
          onChangeText={(value) => this.setState({ username: value })}
          style={styles.input}
          returnKeyType="next" // Set the returnKeyType to 'next'
          onSubmitEditing={() => this.passwordInputRef.current.focus()}
        />

        <TextInput 
         ref={this.passwordInputRef}
          placeholder={'Password'}
          onChangeText={(value) => this.setState({ password: value })}
          style={styles.input}
          secureTextEntry={true}
        />

        <View style={styles.cont2}>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.making_call()}>
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  txt:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:15,
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
    width: 200,
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
});





