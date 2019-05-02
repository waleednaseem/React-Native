import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';


 class App extends Component{
  render() {
    return (
      <AppContainer />
      );
  }
}
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    }   
  };
class WelcomeScreen extends Component{
  render() {
    return (
      <View style={{justifyContent: 'center',alignItems:'center',flex:1}}>
      <Button title='Login' onPress={() => this.props.navigation.navigate('Dashboard')} />
      
      <Button title='SignUp' onPress={() => this.props.navigation.navigate('key pressed')} />
      </View>
    );
  }
}
class DashboardScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Dashboard is here</Text>
        <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
        <Button title='go back' onPress={() => this.props.navigation.navigate('welcome')} />
      </View>
    );
  }
}
class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    }
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  
  };


const Drawer = createDrawerNavigator({
  
  Dashboard:{
    screen: DashboardScreen
  }
});

const switchApp=createSwitchNavigator({
 
  welcome: {screen: WelcomeScreen},
  Dashboard:{screen: Drawer}
});

const AppContainer=createAppContainer(switchApp);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
export default App;