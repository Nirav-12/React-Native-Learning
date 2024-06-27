import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'android') {
      setShow(false);
    } else if (Platform.OS === 'ios') {
    } else {
      setShow(true);
    }
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    setMode('time');
    setShow(false); // Close the picker
    setTimeout(() => {
      setShow(true); // Reopen the picker with the selected hour
    }, 100);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker} style={styles.button}>
        <Text style={styles.buttontxt}>Show date picker!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTimepicker} style={styles.button}>
        <Text style={styles.buttontxt}>Show time picker!</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>{`Selected date is ${date.toLocaleDateString()} `}</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>{`Selected time is ${date.toLocaleTimeString()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 45,
    width: 200,
    backgroundColor: '#468499',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttontxt: {
    fontSize: 20,
  },
});

export default DateTimePickerExample;
