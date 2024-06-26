import React, { useState , useRef} from "react";
import { View , Text , Button , TextInput , StyleSheet, Alert , TouchableOpacity} from 'react-native';



const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

    const handleSignUp = () => {
            if (!username || !email || !password ) {
             Alert.alert('Please fill all fields');
            }else if (!validateEmail(email)) {
              Alert.alert('Invalid email format.');
            } else {
        navigation.navigate('Welcome', { username });
            }
    };

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                onSubmitEditing={() => emailRef.current.focus()}
                ref={usernameRef}
                />

                <TextInput
                placeholder="email"
                value={email}
                onChangeText={setEmail}
                style={styles.input} 
                onSubmitEditing={() => passwordRef.current.focus()}
                ref={emailRef}
                autoCapitalize='none'
                keyboardType='email-address'
                />

                <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input} 
                ref={passwordRef}
                />
                <View>
                    <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                        <Text style={{color: 'black' , fontWeight : 'bold' , fontSize : 18}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
  
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'black',
      },
      subtitle: {
        fontSize: 18,
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: '80%',
      },
      button : {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'orange',
        width : 200,
        height : 45,
        borderRadius: 15,
      }
})