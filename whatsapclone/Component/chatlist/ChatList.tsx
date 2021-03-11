import moment from 'moment'
import React from 'react'
import { View,StyleSheet,Text,Image,TouchableWithoutFeedback } from 'react-native'
import {ChatRoom} from '../Types/Types'
import {useNavigation} from '@react-navigation/native'

export type chatlistItemProps={
  chatroom: ChatRoom
}
const ChatList=(props:chatlistItemProps)=>{
  const navigation= useNavigation();
  const { chatroom } =props;
  const user = chatroom.users[0]
  const onclick=()=>{
    navigation.navigate('Chatroom',{id: chatroom.id, name:user.name})
  } 
  return (
   <TouchableWithoutFeedback onPress={onclick}>
     <View style={style.main}>
      <View style={style.leftContainer}>
        <Image source={{uri : user.imageUri}} style={style.image}/>
        <View style={style.chatting}>
          <Text style={style.head}>
            {user.name}
          </Text>
          <Text style={style.chat}>
            {chatroom.lastMessage.content}
          </Text>
        </View>
      </View>
      <View >
        <Text>
          {moment(chatroom.lastMessage.createdAt).fromNow()}
        </Text>
      </View>    
    </View> 
   </TouchableWithoutFeedback>
  )
}
const style=StyleSheet.create({
  image:{
    width:70,
    height:70,
    borderRadius:50,
    margin:7
  },
  leftContainer:{
    flexDirection: 'row',
  },
  main:{
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
  },
  chatting:{
    justifyContent:'space-around'
  },
  head:{
    color:'black',
    fontSize:18,
    fontFamily:'Verdana',
    fontWeight:'700'
  },
  chat:{
    color:'gray',
    fontSize:15,
    fontWeight:'700'
  }
})

export default ChatList