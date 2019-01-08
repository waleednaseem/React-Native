import React, {Component} from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator} from 'react-navigation';



export default class Login extends Component<Props> {
  	constructor(props){
  		super(props);
  		this.state={
  			username: '',
  			password: '',
  		}
  		this.
  	}	
  	componentDidMount(){
  			this._loadInitialState().done();
  		}
  			_loadInitialState= async () => {
  			var value= await AsyncStorage.getItem('user');
  			if(value !== null){
  				this.props.navigation.navigate('Profile');
  			}
  		}
  		

  render(){
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        	<View style={styles.container}>
        		<Text style={styles.header}>
        			-Login-	
        		</Text>
        		<TextInput style={styles.textInput}
        		placeholder='Username' 
        		onChangeText={(username)=> this.setState({username})}
        		underlineColorAndroid='transparent'
        		/>
        		<TextInput style={styles.textInput}
        		placeholder='password' 
        		onChangeText={(password)=> this.setState({password})}
        		secureTextEntry={true}
        		underlineColorAndroid='transparent'
        		/>
        		<TouchableOpacity style={styles.btn} onPress={this.login}>
        			<Text>
        				Login
        			</Text>
        		</TouchableOpacity>
        	</View>
        </KeyboardAvoidingView>
    );
  }
  
  login=() =>{
      // alert(JSON.stringify(this.state))
  		fetch('http://192.168.0.106:4000/users',{
  			method: 'POST',
  			headers: {
  				'Accept':'application/json',
  				'Content-Type':'application/json',
  			},
  			body:JSON.stringify({
  				username: this.state.username,
  				password: this.state.password,
  			})
  		})
  		 
  		.then((res) =>{  				
  			if(res.success === true){
  				AsyncStorage.setItem('user',res.user);
  				this.props.navigation.navigate('profile');
  			}
  			else{
  				alert(res.message);
  			}

  		})
      .catch((err)=>{
        alert(JSON.stringify(err));
      })
  		.done();
  }
}
const styles=StyleSheet.create({
	wrapper:{
		flex:1,
	},
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#2896d3',
		padding: 40,
		paddingRight: 40 ,
	},
	header:{
		fontSize: 24,
		marginBottom: 60,
		color: '#fff',
		fontWeight:'bold',
		
	},
	textInput:{
		alignSelf:'stretch',
		padding: 16,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	btn:{
		alignSelf:'stretch',
		backgroundColor:'#01c853',
		padding: 20,
		alignItems:'center',
	}
});