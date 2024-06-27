import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Keyboard, TextInput } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const App = () => {
  const [otpInput, setOtpInput] = useState('');
  const inputRef = useRef();

  // Function to handle OTP input change
  const handleOtpChange = (otp) => {
    setOtpInput(otp);
    if (otp.length === 4) {
      // If OTP length is 6, dismiss the keyboard
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>OTP Input</Text>
      <OTPTextView
        handleTextChange={handleOtpChange} // Use the custom handler
        containerStyle={styles.textInputContainer}
        tintColor="#003366"
        offTintColor="grey"
        ref={inputRef}
        textInputStyle={{ fontSize: 20 }} // Optional: Customize the input text style
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
});

export default App;















// import React, { useState, useRef } from 'react';
// import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
// import OTPTextView from 'react-native-otp-textinput';

// const App = () => {
//   const [otpInput, setOtpInput] = useState('');
//   const inputRef = useRef();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.instructions}>OTP Input</Text>
//       <OTPTextView
//         handleTextChange={setOtpInput}
//         containerStyle={styles.textInputContainer}
//         tintColor="#003366"
//         offTintColor={'grey'}
//         ref={inputRef}
//       />
//       <View style={{flexDirection: 'row'}}>
//       </View>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     padding: 5,
//   },
//   instructions: {
//     fontSize: 22,
//     fontWeight: '500',
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 20,
//   },
//   textInputContainer: {
//     marginBottom: 20,
//   },
// });

// export default App;









