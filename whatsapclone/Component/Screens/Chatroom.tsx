import React from 'react'
import { FlatList, Text } from 'react-native'
import {useRoute} from '@react-navigation/native'
import Chats from '../data/chats'
import Messages from '../chatlist/Messages.tsx/Messages'


export default function Chatroom() {
    const route = useRoute()
    return (
       <FlatList
		data={Chats.messages}
		renderItem={({item})=><Messages message={item}/>}
	   />
    )
}
