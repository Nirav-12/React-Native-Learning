import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NaviButton from '../../components/NaviButton';

const Week2Home = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Week 2 Tasks</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title1}>React Navigation</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Stack Navigation demo</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('StackNavigation')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Stack Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Stack')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Stack Navigation with passing parameters
          </Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('StackProp')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Bottom Tab Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('BottomTab')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}> Custom Bottom Tab Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('CustomBottom')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Drawer Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Drawer')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}> Custom Drawer Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('CustomDrawer')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Top Tab Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('TopTab')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}> Custom Top Tab Navigation</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('CustomTopTab')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Week2Home;

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
