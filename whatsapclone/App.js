import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Button,View,StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TopTabNav from './Component/TopTabNav'
import Chatroom from './Component/Screens/Chatroom';


const Stack=createStackNavigator()


function App() {
  
  return (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="root" component={TopTabNav} options={
          {title:'whatsap clone',
          headerTintColor:'white',
          headerStyle:{backgroundColor:'black'},
          headerRight:()=>(
          <View style={style.options}>
            <Fontisto name="search" size={24} color='white' /> 
            <MaterialCommunityIcons name="dots-vertical" size={26} color='white' /> 
          </View>
          )}
        }/>
      <Stack.Screen name="Chatroom"
        component={Chatroom}
        options={({route})=>({
          title : route.params.name,
          headerRight:()=>(<View style={style.options}>
            <Fontisto name="phone" size={24} color='black' /> 
            <MaterialCommunityIcons name="video" size={26} color='black' />
          </View>)
        })
      }
      />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  
  );
}
const style=StyleSheet.create({
  options:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:80,
    display:'flex',
    flex:1,
    marginTop:15,
    marginRight:10,
  },
  scene: {
    flex: 1,
  },
})
export default App;
