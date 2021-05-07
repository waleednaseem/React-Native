import React from 'react'
import {StyleSheet, Text , View} from 'react-native'
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
            <View style={{
                backgroundColor: isMyMsg()? 'white':'lightgray',
                padding:10,
                borderRadius: 10,
                marginLeft:isMyMsg()?50 :0,
                marginRight:isMyMsg()?0 :50,
                margin: 10,
                }}>
                <Text style={{color:'black',fontSize:15}}>
                    {!isMyMsg()?message.user.name:''}
                </Text>
                <Text style={{color:'black',fontSize:17}}>
                    {message.content}
                </Text>
                <Text style={{color:'black',alignSelf: 'flex-end',}}>
                    {moment(message.createdAt).fromNow()}
                </Text>
            </View>
    )
}

export default Messages