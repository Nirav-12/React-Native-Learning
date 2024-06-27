import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button, StyleSheet, LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '958043134416-68galqe91jfq6lvg2qv5u6543ha91a5q.apps.googleusercontent.com',
      // androidClientId:
      //   '958043134416-b7j4q16p6jauenbahenl619vtepde2ii.apps.googleusercontent.com',
    });

    async function handleSignIn() {
      GoogleSignin.isSignedIn().then(isSignedIn => {
        if (isSignedIn) {
          GoogleSignin.signInSilently().then(userInfo => {
            setUser(userInfo);
          });
        }
      });
    }
    handleSignIn();
  }, []);

  const signIn = async () => {
    console.log(
      '------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
    );
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setUser(userInfo);
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Image style={styles.image} source={{uri: user.user.photo}} />
          <Text style={styles.text}>{user.user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : (
        <GoogleSigninButton
          onPress={signIn}
          style={{height: 48, width: 192}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
        />
        // <Button title='sign in' onPress={signIn}/>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 12,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
