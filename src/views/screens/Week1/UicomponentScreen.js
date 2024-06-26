import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
  ActivityIndicator,
  FlatList,
} from 'react-native';

const image = {uri: 'https://www.gstatic.com/webp/gallery3/1.sm.png'};

const AllComponentsScreen = ({navigation}) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePress = () => {
    setCounter(counter + 1);
  };

  const handlePress1 = () => {
    setCounter1(counter1 + 1);
  };

  const DATA = [
    {
      id: '1',
      title: '1. Cathenna',
    },
    {
      id: '2',
      title: '2. Adelina',
    },
    {
      id: '3',
      title: '3. Eastern',
    },
    {
      id: '4',
      title: '4. Elanie',
    },
    {
      id: '5',
      title: '5. Marielia',
    },
  ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.flattitle}>{title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Components Screen</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>ActivityIndicator</Text>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Button</Text>
        <Button title="Press me" onPress={handlePress} />
        <Text style={styles.counter}>{counter}</Text>
      </View>

      <View style={styles.section}>
        <Text style={{...styles.subtitle}}>FlatList</Text>
        {/* <ScrollView> */}
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          // style={{height:140}}
        />
        {/* </ScrollView> */}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Image</Text>
        <Image
          style={styles.image}
          source={require('../../../assets/people.jpg')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>ImageBackground</Text>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>KeyBoardAvoidingView</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Modal</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Pressable</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>RefreshControl</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>ScrollView</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>SectionList</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>StatusBar</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Switch</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Text</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Text Input</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter some text"
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>TouchableHighlight</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>TouchableOpacity</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress1}>
          <Text style={styles.buttonText}>Press me!</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>{counter1}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>TouchableWithoutFeedback</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>View</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>VirtulizeList</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 350,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
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
  item: {
    borderRadius: 10,
    backgroundColor: '#3e3e3e',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  flattitle: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
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
  counter: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});

export default AllComponentsScreen;
