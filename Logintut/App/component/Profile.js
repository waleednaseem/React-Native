import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Profile extends Component<Props> {

  render(){
    return (
        
        	<View style={styles.container}>
        		<Text style={styles.header}>
        			Welcome to Profile
        		</Text>
        	</View>
    );
  }
  
 
}
const styles=StyleSheet.create({
	text:{
		color:'#fff'
	},
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#2896d3',
		padding: 40,
		paddingRight: 40 ,
	},
	
});