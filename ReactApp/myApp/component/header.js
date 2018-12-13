import React from 'react';
import {Text,View,alignItems}from 'react-native';



const Header= (props)=>{

	 const {textStyle, viewStyle} = styles;

	return (
		<View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
		
		
	};

	const styles={
		
		textStyle: {
			fontSize:30 
		},
		viewStyle: {
			backgroundColor:'#87CEEB',
			alignItems:'center',
			justifyContent:'center',
			height:50,
			paddingTop:15,
			shadowColor:'#000000',
			shadowOffset:{width:0,height:2},
			shadowOpacity:0.2,
			position:'relative',
			elevation:2
		}
	};

	export default Header;