
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/Store';
import {Provider} from 'react-redux';

export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />  
      </Provider>     
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
  
});
