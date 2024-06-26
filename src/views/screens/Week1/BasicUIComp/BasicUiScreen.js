import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NaviButton from '../../../components/NaviButton';

const ButtonScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Basic UI Component</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>ActivityIndicator</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Activity')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Button</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Button')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>FlatList</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Flat')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Image</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Image')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Imagebackground</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Iamgebackground')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>KeyBoardAvoidingView</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Keyboard')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Modal</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Modal')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Pressable</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Press')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>RefreshControl</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Refresh')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>ScrollView</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Scroll')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>SectionList</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Section')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>StatusBar</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Status')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Switch</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Switch')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Text</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Text')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>TextInput</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('TextInput')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>TouchableHighlight</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('TouchHigh')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>TouchableOpacity</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('TouchableOpacity')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>TouchableWithoutFeedback</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('TouchFeedback')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>View</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('ViewComponent')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>VirtualizedList</Text>
          <NaviButton
            title="tap here"
            onPress={() => navigation.navigate('Virtual')}
          />
        </View>
      </ScrollView>
    </View>
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
