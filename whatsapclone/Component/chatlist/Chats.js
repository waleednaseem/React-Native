import React from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import ChatList from './ChatList'

export default function Chats() {
    return (
        <View >
            <ScrollView>
                <ChatList/>
                <ChatList/>
                <ChatList/>
                <ChatList/>
                <ChatList/>
                <ChatList/>
                <ChatList/>
            </ScrollView>
        </View>
    )
}
const style=StyleSheet.create({
    home:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})