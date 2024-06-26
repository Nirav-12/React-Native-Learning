import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
  
const Images = () => {
  return (
    <View style={{ flex: 1, 
                   alignItems: "center", 
                   justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>
        Images Screen!
      </Text>
      <Icon name="image" 
                size={80} color="#006600" />
    </View>
  );
};
  
export default Images;