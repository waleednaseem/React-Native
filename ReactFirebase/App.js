import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

var config = {
  apiKey: "AIzaSyAQLiq_6PBSV967J190PKwNrgwbm-YCFwQ",
  authDomain: "react-firebase-a1fc5.firebaseapp.com",
  databaseURL: "https://react-firebase-a1fc5.firebaseio.com",
  projectId: "react-firebase-a1fc5",
  storageBucket: "react-firebase-a1fc5.appspot.com"
};

firebase.initializeApp(config);


export default class App extends Component<Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>
              Email
            </Label>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>
          <Item floatingLabel>
            <Label>
              Password
            </Label>
            <Input 
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>
          <Button style={{marginTop:10}}
            full
            rounded
            success
          >
            <Text style={{color:'white'}}>Login</Text>
          </Button>
          <Button style={{marginTop:10}}
            full
            rounded
            primary
          >
            <Text style={{color:'white'}}>SignUp</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding:20
  }

});
