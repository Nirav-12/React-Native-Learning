import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NaviButton from '../../components/NaviButton';

const Week1Home = ({navigation}) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Week 1 Tasks</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Debugging App</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Debug')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Basic UI Component </Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('UiNavigation')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Login Screen using Class Component
          </Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Signup screen using Function Component
          </Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Manage in Both Class and Function</Text>
          <NaviButton
            title="Function Component"
            onPress={() => navigation.navigate('State')}
          />
          <View style={{marginTop: 15}}>
            <NaviButton
              title="Class Component"
              onPress={() => navigation.navigate('State1')}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Custom Component</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('CustoCom')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Week1Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
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
});
