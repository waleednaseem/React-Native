import React,{Component} from 'react';
import {View, Text} from 'react-native'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component{
	componentWillMount(){
		const config={
			apiKey: "AIzaSyBF2FmAryCTM1IABEStvbBZBjfhMpD99Ew",
		    authDomain: "myapp-2a575.firebaseapp.com",
		    databaseURL: "https://myapp-2a575.firebaseio.com",
		    projectId: "myapp-2a575",
		    storageBucket: "myapp-2a575.appspot.com",
		    messagingSenderId: "324075891539"
		}
		firebase.initializeApp(config);
	}
	render(){
		return(
				<Provider store={createStore(reducers)}>
					<View>
						<Text>
							hellow
						</Text>
					</View>
				</Provider>
			);
	}
}