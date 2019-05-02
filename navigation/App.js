import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
class Home extends Component {
  static navigationOptions={
    headerStyle:{
      backgroundColor: 'blue'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home</Text>
      </View>
    );
  }
}
class DashBoard extends Component {
  static navigationOptions={
    headerStyle:{
      backgroundColor: 'red'
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={{height:1000,borderWidth:5,borderColor:'green'}}>
          <Text style={styles.welcome}>DashBoard</Text>
        </View>
      </ScrollView>  
    );
  }
}

const Navigators = createStackNavigator({
  Home:Home
},{
  defaultNavigationOptions :{
    headerStyle:{
      backgroundColor:'black'
    }
  }
});

const Drawer=createDrawerNavigator({
  Home:Home,
  DashBoard:DashBoard
},{ unmountInactiveRoutes: true,
  defaultNavigationOptions :{
    headerStyle:{
      backgroundColor:'black'
    }
  }
});

const AppContainer = createAppContainer(Drawer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
