import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBQQfBzEsqTN91MHwdukq0yaBxWIcn5RjUw&usqp=CAU'}}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world!</Text>
        <Text style={{fontSize:20,color:'#fff'}}>This is React-Native ImageBackgroung</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;

