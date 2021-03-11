import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Calls from './calls/Calls'
import Videos from './Videos'
import Chats from './chatlist/Chats'
import ChatScreen from './Screens/ChatScreen'
import Camera from './Camera'
import {MainTabParamList, TabOneParamList ,TabTwoParamList} from './Types/Types'

const Tab = createMaterialTopTabNavigator<MainTabParamList>();

export default function TopTabNav() {
   
    return (
            <Tab.Navigator initialRouteName='Chat'  tabBarOptions={{showIcon:true,}} >
                <Tab.Screen name='Camera' component={Camera} options={{
                    tabBarIcon: ()=><FontAwesome5 name='book-reader' color="red" size={21}/>,
                    tabBarLabel:()=>null
                }}/>
                <Tab.Screen name='Chat' component={ChatScreen} options={{
                    tabBarIcon:()=><Entypo name='chat' color='green' size={21}/>,
                    tabBarLabel:()=>null
                }}/>
                <Tab.Screen name='Status' component={Videos} options={{
                    tabBarIcon:()=><Foundation name='play-video' size={21}/>,
                    tabBarLabel:()=> null
                }}/>
                <Tab.Screen name='Calls' component={Calls} options={{
                    tabBarIcon:()=><MaterialIcons name='call' color='blue' size={21}/>,
                    tabBarLabel:()=> null
                }}/>
            </Tab.Navigator>
        
    )
}
