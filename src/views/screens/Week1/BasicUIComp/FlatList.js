import React from 'react';
import { View , Text , FlatList , StyleSheet , ScrollView} from 'react-native';

const Flat = () => {

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
        {
            id: '6',
            title: '6. Leisl',
          },
          {
            id: '7',
            title: '7. Rapier',
          },
          {
            id: '8',
            title: '8. Zahra',
          },
          {
            id: '9',
            title: '9. Driss',
          },
          {
            id: '10',
            title: '10. Alisa',
          },
      ];
      
      const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.flattitle}>{title}</Text>
        </View>
      );

    return(
        <View style={styles.container}>
            <Text style={{...styles.subtitle}}>FlatList</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        // style={{height:140}}
      />
        </View>
    )
}
export default Flat;

const styles = StyleSheet.create({
    container : {
       marginBottom:50
    },
    subtitle: {
        marginTop:20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      item: {
        borderRadius:10,
        backgroundColor: '#3e3e3e',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      flattitle: {
        color:'white',
        fontSize: 20,
      },
})