import React, { Dispatch, FC, SetStateAction, useCallback } from 'react';
//prettier-ignore
import { StyleSheet, View, Text,  } from 'react-native';
import {MD2Colors} from 'react-native-paper';
import * as D from '../data';

export type TopBarProps = {
  setPeople: Dispatch<SetStateAction<D.IPerson[]>>
}

const TopBar: FC<TopBarProps> = ({setPeople}) => {
  const add = useCallback(() => setPeople(prevPeople => [D.createRandomPerson(), ...prevPeople]),[])
  const deleteAll = useCallback(() => setPeople(notUsed => []) ,[])
  
  return (
    <View style={[styles.topBar]}>
        <Text style={[styles.textButton]} onPress={add}>add</Text>
        <Text style={[styles.textButton]} onPress={deleteAll}>deleteAll</Text>

    </View>
  );
}

export default TopBar

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: MD2Colors.lightBlue700,
  },
  textButton: {color: 'while', fontSize:20},
  text: {textAlign: 'center', fontSize: 20},
  avatar: {width: 40, height: 40, borderRadius: 20},
  centerView: {flex: 1},
});
