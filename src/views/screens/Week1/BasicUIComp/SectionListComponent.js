import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

function SectionListExample() {
  const data = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
    },
    {
      title: 'Vegetables',
      data: ['Artichoke', 'Broccoli', 'Carrot', 'Daikon', 'Eggplant'],
    },
    {
        title: 'Grains',
        data: ['Oats', 'Barley', 'Bulgur', 'Farro', 'Brown Rice'],
      },
  ];

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
      showsVerticalScrollIndicator={false}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    padding: 8,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default SectionListExample;
