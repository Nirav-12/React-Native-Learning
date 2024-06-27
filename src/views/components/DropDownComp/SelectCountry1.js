import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    lable: 'Country 1',
    image: require('../../../assets/india.png'),
  },
  {
    value: '2',
    lable: 'Country 2',
    image: require('../../../assets/russia.png'),
  },
  {
    value: '3',
    lable: 'Country 3',
    image: require('../../../assets/canada.png'),
  },
  {
    value: '4',
    lable: 'Country 4',
    image: require('../../../assets/uk.png'),
  },
  {
    value: '5',
    lable: 'Country 5',
    image: require('../../../assets/usa.png'),
  },
];

const SelectCountryScreen = _props => {
  const [country, setCountry] = useState('1');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select Country"
      searchPlaceholder="Search..."
      onChange={e => {
        setCountry(e.value);
      }}
    />
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    backgroundColor: '#f7ce5c',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
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
});
