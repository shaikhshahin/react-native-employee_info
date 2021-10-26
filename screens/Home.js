import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'

const DATA = [
  {
    id: '1',
    First_Name: 'SHAHIN ',
    Last_Name:'SHAIKH'
  },
  {
    id: '2',
    First_Name: 'SHAIKH',
    Last_Name:'SHAIKH'

  },
  {
    id: '3',
    First_Name: 'SHAHIN SULTANA' ,
    Last_Name:'SHAIKH'

  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.firstName, textColor]}>{item.First_Name}</Text>
    <Text style={[styles.lastName, textColor]}>{item.Last_Name}</Text>

  </TouchableOpacity>
);

export default function HomeScreen(props) {
    const [selectedId, setSelectedId] = useState(null);
    const listItems = useSelector(state => state.itemList)
    console.log({ listItems })
  

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      const color = item.id === selectedId ? 'black' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          textColor={{ color }}
        />
      );
    };
    const ItemSeparatorView = () => {
        return (
          //Item Separator
          <View
            style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
          />
        );
      };
    
  
    return (
      <SafeAreaView style={styles.container}>
            {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          ItemSeparatorComponent={ItemSeparatorView}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
    <Text style={[styles.firstName]}>{item.firstName}</Text>
    <Text style={[styles.firstName]}>{item.lastName}</Text>

              <TouchableOpacity
                onPress={() => dispatch(removeItem(item.id))}
                style={styles.button}>
                <Ionicons name='ios-save' color='black' size={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={DATA}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />      )}

       
              <View style={styles.fabContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Employee')}
          style={styles.fabButton}>
          <Ionicons name='add' color='#fff' size={70} />
        </TouchableOpacity>
      </View>

      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    fabContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 20
      },
      fabButton: {
        backgroundColor: '#89CFF0',
        borderRadius: 35,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
      },
    
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    firstName: {
      fontSize: 14,
      color:'#000'
    },
    lastName:{
        fontSize: 14,
        color:'#000'

    },
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 5,
        paddingRight: 5,
        justifyContent: 'space-between',
        width: '100%',
        borderBottomWidth: 0.25
      },
      itemTitle: {
        fontSize: 30,
        fontWeight: '400',
      },
    
  });
  