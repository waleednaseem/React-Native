import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class AddTodo extends Component<Props> {
  render() {
    return (
      <View style={{flexDirection:'row', marginHorizontal: 20}}>
        <TextInput 
          placeholder="Eg. create new video"
          style={{borderWidth:1, borderColor:'#f2f2e1',
                  backgroundColor:'#eaeaea',height:50,flex:1,
                padding:5}}
        />
        <TouchableOpacity onPress={()=>alert('added todo')}>
          <View style={{height:50,backgroundColor:'#eaeaea'}}>
            <Ionicons name="md-add" size= {30} style={{
              color:'#de9595', padding: 10
            }}/>
          </View>
      </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
  
});
