import React, { useCallback, useEffect, useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { ActivityIndicator, MD2Colors, Text } from 'react-native-paper'

export default function Timer() {
    const [loading, setLoading] = useState(true)
    const toggleLoading = useCallback(() => setLoading((loading) => !loading),[])
    
    useEffect(() => {
        const id = setTimeout(() => setLoading(false),3000)
        return () => clearTimeout(id)
    },[loading])

    return(
        <View style={styles.view}>
            <Text style={styles.title}>Timer</Text>
            <Text>loading: {loading.toString()}</Text>
                <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'}/>
                {loading && (
                    <ActivityIndicator size = "large" color={MD2Colors.deepPurple700}/>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor:MD2Colors.yellow300},
    title: {fontSize: 30, fontWeight: '600'}
})