import React, {Component} from 'react';
import {StyleSheet,
 Text,
 View,
 TextInput,
 ScrollView,
 TouchableOpacity } from 'react-native';
import Main from './App/component/Main';

export default class App extends Component<Props> {
  render() {
    return (
      <Main />
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    
  },
});
