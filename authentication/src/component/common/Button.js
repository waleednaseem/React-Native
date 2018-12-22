import React from 'react';
import { Text , TouchableOpacity } from 'react-native';



const Button=(props) => {
	const {buttonSetting, TextStyle}=stylez;
	return(
			<TouchableOpacity  style={buttonSetting}>
				<Text style={TextStyle}>
				Login
				</Text>
			</TouchableOpacity>
		);
};

const stylez={
	buttonSetting:{
		flex:1,
		alignSelf: 'stretch',
		marginLeft:5,
		marginRight:5,
		borderRadius: 5,
		backgroundColor:'#fff',
		borderWidth:1,
		borderColor:'#007aff',
	},
	TextStyle:{
		alignSelf:'center',
		color:'#007aff',
		fontSize:16,
		fontWeight:'600',
		paddingTop:5,
		paddingBottom:5,
	}
};

export { Button };