import React, { useState } from 'react';
import { View, Text, VirtualizedList, StyleSheet } from 'react-native';

const VirtualizedListExample = () => {
  const [data, setData] = useState(Array.from(Array(101).keys()));

  const getItemCount = () => data.length;

  const getItem = (data, index) => data[index];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );

  return (
    <VirtualizedList
    showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      getItemCount={getItemCount}
      getItem={getItem}
      initialNumToRender={20}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default VirtualizedListExample;
