import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Touchable} from 'react-native';
import AddTodo from './containers/AddTodo';
import {Ionicons} from 'react-native-vector-icons'

export default class TodoApp extends Component<Props> {
  render() {
    return (
      <View style={{flexDirection:'row', marginHorizontal: 20}}>
        <TextInput 
          placeholder="Eg. creat new video"
          style={{borderWidth:1, borderColor:'#f2f2e1',
                  backgroundColor:'#eaeaea',height:50,flex:1,
                padding:5}}
        />
        <Touchable onPress={()=>alert('added todo')}>
          <View style={{height:50,backgroundColor:'#eaeaea'}}>
            <Ionicons name="md-add" size={30}/>
          </View>
      </Touchable>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
  
});
