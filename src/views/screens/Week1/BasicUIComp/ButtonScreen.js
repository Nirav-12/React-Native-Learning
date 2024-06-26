import React, {useState} from "react";
import { View , Text , StyleSheet,  Button } from "react-native";


const ButtonScreen = () => {

    const [counter , setCounter] = useState(0);

    const handlePress = () => {
        setCounter(counter + 1);
      };

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>This is Button</Text>
            <View style={{marginTop:10}}>
            <Button title="Button"  onPress={handlePress}/>
            </View>
            <Text style={styles.txt}>{counter}</Text>
        </View>
    )
}

export default ButtonScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 250,
        flex: 1,
        padding:20,
    },
    txt : {
        marginTop:10,
        fontSize: 20,
        textAlign: 'center'
    },
})