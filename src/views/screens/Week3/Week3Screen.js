import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NaviButton from '../../components/NaviButton';

const ButtonScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Week 3 Tasks</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title1}>Third Party Library Integration</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Date Time Picker</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('DateTime')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>OTP Input</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Otp')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Authentication </Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Auth')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Drop Down</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('DropDown')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Material Menu</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('MaterialMenu')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title1}>Social LogIn Integration</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Google SignIn</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Google')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Facebook SignIn</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Facebook')}
          />
        </View>
      </View>
    </ScrollView>
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
  },
  btn: {
    width: 200,
    height: 45,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 15,
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
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
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
