import React from 'react'
import {Text , View} from 'react-native'
import { Message } from '../../Types/Types'
import moment from 'moment'

export type chatMessages={
    message: Message
}
const Messages=(props: chatMessages)=>{
    const {message}= props;
    const isMyMsg=()=>{
        return message.user.id === 'u1'
    }
    return(
        <View>
            <Text>
                {message.user.name}
            </Text>
            <Text>
                {message.content}
            </Text>
            <Text>
                {moment(message.createdAt).fromNow()}
            </Text>
        </View>
    )
}
export default Messages