import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NaviButton from '../components/NaviButton';

const ButtonScreen = ({navigation}) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>React Native Trainee Tasks</Text>
          </View>

          <View style={styles.section}>
            <NaviButton
              title="week 1"
              onPress={() => navigation.navigate('Week1')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    width: 200,
    height: 45,
    backgroundColor: '#800000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  header: {
    backgroundColor: '#0088cc',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0088cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
