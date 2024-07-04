import React, { useMemo } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import * as D from '../data';
import { fibonacci } from './fibonacci';

const title = 'Fibo';

export default function Fibo() {
    const memoizedFibonacci = useMemo(() => fibonacci, []);
    const fibos = useMemo(
        () =>
            D.makeArray(20 + 1).map((notUsed, index) => ({
                number: index,
                fibonacci: memoizedFibonacci(index),
            })),
        []
    );
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
            <FlatList
                style={[styles.flatList]}
                data={fibos}
                renderItem={({ item }) => (
                    <Text style={[styles.text]}>
                      {item.number} : {item.fibonacci}
                      </Text>
                )}
                keyExtractor={(item) => item.number.toString()}
                ItemSeparatorComponent={() => (
                    <View style={[styles.itemSeparator]} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: { flex: 1, padding: 5, backgroundColor: MD2Colors.blue900 },
    text: { fontSize: 20, color: 'white' },
    flatList: { width: '100%' },
    itemSeparator: { borderWidth: 1, borderColor: MD2Colors.grey500 },
});
