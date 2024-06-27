import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk-next';

const FacebookProfile = () => {

  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUserData = (token) => {
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture.type(large)',
      null,
      (error, result) => {
        if (error) {
          console.log('Error fetching data:', error.toString());
        } else {
          setUserData(result);
        }
      }
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  };

  useEffect(() => {
    AccessToken.getCurrentAccessToken().then((data) => {
      if (data) {
        setIsLoggedIn(true);
        getUserData(data.accessToken.toString());
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    });
  }, []);

  const handleLogin = (error, result) => {
    if (error) {
      console.log("login has error: " + result.error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          console.log(data.accessToken.toString())
          setIsLoggedIn(true);
          getUserData(data.accessToken.toString());
        }
      )
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={handleLogin}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <Image source={{ uri: userData.picture.data.url }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          <Text style={{ fontSize: 20, marginTop: 16 }}>{userData.name}</Text>
        </>
      )}
      <View style={{ marginTop: 16 }}>
        <LoginButton onLogoutFinished={handleLogout} />
      </View>
    </View>
  );
}

export default FacebookProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
