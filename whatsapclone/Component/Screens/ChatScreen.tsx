import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Chatlist from '../chatlist/ChatList'
import userchats from '../data/userchats'

const ChatScreen = () => {
    return (
        <View>
            <FlatList 
            data={userchats} 
            renderItem={({item})=><Chatlist chatroom={item}/>}
            keyExtractor={(item) =>item.id}
            />
        </View>
    )
}

export default ChatScreen
