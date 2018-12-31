import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './App/component/Login';
import Profile from './App/component/Profile';

const Application = createAppContainer(createStackNavigator({
  Home: {screen: Login},
  Profile:{screen: Profile},
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
