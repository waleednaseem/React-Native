import React,{Component} from 'react';
import { View} from 'react-native';
import {Header} from './component/common';
import Login from './component/Login';


class App extends Component{
	initializeFirebase() {
  const firebase = require("firebase");

  
  var config = {
  	apiKey: "AIzaSyBF2FmAryCTM1IABEStvbBZBjfhMpD99Ew",
    authDomain: "myapp-2a575.firebaseapp.com",
    databaseURL: "https://myapp-2a575.firebaseio.com",
    projectId: "myapp-2a575",
    storageBucket: "myapp-2a575.appspot.com",
    messagingSenderId: "324075891539"
  };
  firebase.initializeApp(config);

  
  const firestore = require("firebase/firestore");
  db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
}
	componentWillMount()
	{
		this.initializeFirebase();
	}
	render(){
	return(
			<View>
				<Header headerText='authentication' />
				<Login />
			</View>
		);	
	}
	
}

export default App;
