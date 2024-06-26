import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageComponent = () => {
  return (
    <View>
      <Text style={styles.subtitle}>Image</Text>
      <Text style={styles.subtitle}>local Image</Text>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require('../../../../assets/people.jpg')}
        />
      </View>

      <Text style={styles.subtitle}>Image from Url</Text>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://placebear.com/g/200/200'}}
        />
      </View>
    </View>
  );
};
export default ImageComponent;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
  image: {
    height: 250,
    width: 360,
    resizeMode: 'contain',
  },
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
