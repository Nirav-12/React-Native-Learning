import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="powederblue" barStyle='default' />
      {/* The rest of your app's components */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
