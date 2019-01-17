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

  constructor(props){
   super(props)
   this.state =({
     email:'',
     password:'',
   })
  }
  signUp=(email, password)=>{
   try {
    if(this.state.password.length<6){
      alert("please enter atlease 6 characters")
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
     
   } catch (error) {
     console.log(error.toString())
   }
  }

  loginUser =(email, password)=>{
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })
    } catch (error) {
      console.log(error.toString())
    }
  }

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
              onChangeText={(email)=>this.setState({email})}
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
              onChangeText={(password)=>this.setState({password})}
            />
          </Item>

          <Button style={{marginTop:10}}
            full
            rounded
            success
            onPress={()=> this.loginUser(this.state.email,this.state.password)}
          >
            <Text style={{color:'white'}}>Login</Text>
          </Button>

          <Button style={{marginTop:10}}
            full
            rounded
            primary
            onPress={()=> this.signUp(this.state.email,this.state.password)}
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
