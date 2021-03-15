import { useNavigationBuilder } from '@react-navigation/core'
import React,{useState} from 'react'
import { View,TextInput, Text, StyleSheet} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ChatInput(){
    const [chatmsg,setchatmsg]=useState('')
    const [typing,setTyping]=useState(false)
   
    return(
        <View style={style.main}>
            
                <View style={style.div1}>
                    <View style={style.icons}>
                        <Entypo name='emoji-happy' color='silver' size={25} />
                    </View>
                    <TextInput 
                        placeholder="type your msg"
                        onChangeText={setTyping}
                        value={typing}
                        style={style.chatting }
                        multiline
                    />
                    <View style={style.icons}>
                        <Entypo name='attachment' color='silver' size={25} />
                    </View>
                    <View style={style.icons}>
                        {!typing && <Entypo name='camera' color='silver' size={25} />}
                    </View>
                </View>
                <View style={style.sendbtn}>
                    {typing?<FontAwesome name='send-o' color="silver" size={30}/>:<Entypo name='mic' color="silver" size={30}/>}
                </View>         
        </View>
        
    )
}
const style=StyleSheet.create({
    div1:{
        backgroundColor:'white',
        flexDirection: 'row',
        borderRadius:50,
        flex:1,
        alignItems: 'center',
    },
    chatting:{
        color:'black',
        flex:1,
    },
    main:{
        flexDirection: 'row',
        margin:10,
    },
    icons:{
        flexDirection: 'row',
        margin:8,
        padding:2,
        justifyContent:'space-around',
    },
    sendbtn:{
        justifyContent:'center',
        marginHorizontal:10
    }
})