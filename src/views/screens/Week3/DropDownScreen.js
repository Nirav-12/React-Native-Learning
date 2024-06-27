import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropdownComponent from '../../components/DropDownComp/DropDownComponent';
import MultiSelectComponent from '../../components/DropDownComp/MultiSelectComponent';
import SelectCountry1 from '../../components/DropDownComp/SelectCountry1';
import SelectCountry2 from '../../components/DropDownComp/SelectCountry2';

const SelectCountryScreen = () => {
  return (
    <View>
      <SelectCountry2 />

      <MultiSelectComponent />

      <SelectCountry1 />
    </View>
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
