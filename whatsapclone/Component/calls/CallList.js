import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function callList() {
    return (
        <View style={style.main}>
          <View style={style.card}>
            <Image style={style.images} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} />
            <View style={style.innerCard}>
               <View style={style.identity}>
                    <Text  style={style.headingName}>User Name</Text>
                    <View>
                        <Text>time</Text>
                        <MaterialIcons name='call-made' size={20} color='green' />
                    </View>
                </View>
                    <View style={style.call}>
                        <MaterialIcons name='call' size={30} color='red' />
                    </View>
            </View>
          </View>
        </View>
      )
    }
    const style=StyleSheet.create({
          main:{
            top:0,
            margin:1,
            height:100,
            width:'97%',
          },
          card:{
            width:'100%',
            height:100,
            borderTopColor:1,
            flexDirection:'row',
            display:'flex',
            flex:1,
            
          },
          images:{
            width:80,
            height:80,
            borderRadius:50
          },
          innerCard:{
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            width:'100%',
            flexDirection: 'row',
          },
          headingName:{
            color:'black',
            fontSize:17,
            fontWeight: 'bold',
            // fontFamily: "vincHand",
            fontFamily: 'Roboto'
          },
          identity:{
              margin:10,
              width:'60%',
          },
          call:{
              margin:10
          }
    })