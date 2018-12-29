import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './App/component/Login';

const Application = createAppContainer(createStackNavigator({
  Home: {screen: Login},
},
  {
    navigationOptions: {
      headerMode: 'none',
    }

}));

export default class App extends React.Component{
  render() {
    return (
        <Application />
    );
  }
}
