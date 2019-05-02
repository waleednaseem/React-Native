import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';

 export default class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
   
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);