import React, { FC, useCallback, useMemo, useState } from 'react';
// prettier-ignore
import { StyleSheet, View, Text, FlatList, Dimensions, ScrollView } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import * as D from '../test05/src/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from './src/screens/TopBar';
import Timer from './src/screens/ch04_4/Timer';
import Interval from './src/screens/ch04_4/Interval';

export default function App() {
    const selects = useMemo(()=> ['lifeCycle', 'timer', 'interval', 'fetch'],[])
    const [select, setSelect] = useState<string>(selects[0])
    const onPress = useCallback((text) => () => setSelect(text),[])
    const buttons = useMemo(() => selects.map((text) => (
      <Text key={text} onPress={onPress(text)} style={styles.button}>{text}</Text>
    )),[])

    return (
        <SafeAreaView style={styles.flex}>
          <View style={styles.topBar}>{buttons}</View>
          {select == 'timer' && <Timer/>}
          {select == 'interval' && <Interval/>}
          {/* {select == 'fetch' && <Fetch/>}  */}
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex: { flex: 1 },
    topBar: {flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 5,
      backgroundColor: MD2Colors.blue300,},
    view: { flex: 1, padding: 5, backgroundColor: MD2Colors.blue900 },
    text: { fontSize: 24, textAlign: 'center'},
    flatList: { width: '100%' },
    itemSeparator: { borderWidth: 1, borderColor: MD2Colors.grey500 },
    button: {fontSize: 20, color: 'white'}
});
