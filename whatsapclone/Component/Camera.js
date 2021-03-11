import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Camera() {
    return (
        <View style={style.home}>
            <Text>Camera</Text>
        </View>
    )
}
const style=StyleSheet.create({
    home:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})