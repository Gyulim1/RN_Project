import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import * as D from '../data';
import Person from './Person';
import {createOrUse} from './createOrUse';

const title = 'Cache';

export default function Cache() {
  const people = createOrUse('people', () =>
    D.makeArray(2).map(D.createRandomPerson),
  );

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
          style={[styles.flatList]}
          data={people}
          renderItem={({item}) => <Person person={item} />}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <View style={[styles.itemSeparator]} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: MD2Colors.blue900},
  text: {fontSize: 20, color: 'white'},
  flatList: {width: '100%'},
  itemSeparator: {borderWidth: 1, borderColor: MD2Colors.grey500},
});
