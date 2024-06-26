import React from "react";
import { View , Text , StyleSheet} from "react-native";

const WelcomeScreen = ({ route }) => {
    const { username } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome {username}!</Text>
        <Text style={styles.subtitle}>Thank you for signing up.</Text>
      </View>
    );
  };

  export default WelcomeScreen;

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
        color: 'black',
        fontSize: 18,
      },
  })