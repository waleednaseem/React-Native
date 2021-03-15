import React from 'react'
import { FlatList, Text, View ,StyleSheet ,ImageBackground} from 'react-native'
import {useRoute} from '@react-navigation/native'
import Chats from '../data/chats'
import Messages from '../chatlist/Messages.tsx/Messages'
import ChatInput from '../chatlist/Messages.tsx/ChatInput'

const image = { uri: "https://i.pinimg.com/originals/05/5b/dc/055bdc52b9c5e6a1444b517cb5e17a9d.jpg" }

export default function Chatroom() {
    const route = useRoute()
    return (<ImageBackground source={image} style={style.image}>
                <View style={{height:'100%'}}>
                  <FlatList
                        data={Chats.messages}
                        renderItem={({item})=><Messages message={item}/>}
                        inverted
                    />
                      <ChatInput/>
              </View>
            </ImageBackground>       
    )
}
const style=StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width:'100%',
    height:'100%'
  }
})
