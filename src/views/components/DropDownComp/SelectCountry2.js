import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    lable: 'India',
    image: require('../../../assets/india.png'),
  },
  {
    value: '2',
    lable: 'UK',
    image: require('../../../assets/uk.png'),
  },
  {
    value: '3',
    lable: 'USA',
    image: require('../../../assets/usa.png'),
  },
  {
    value: '4',
    lable: 'Canada',
    image: require('../../../assets/canada.png'),
  },
  {
    value: '5',
    lable: 'Russia',
    image: require('../../../assets/russia.png'),
  },
];

const SelectCountryScreen = () => {
  const [country, setCountry] = useState();

  return (
    <View>
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={styles.imageStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select country 1"
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
      />
    </View>
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
