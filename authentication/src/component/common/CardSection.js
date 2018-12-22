import React from 'react';
import {View} from 'react-native';


const CardSection = (props) => 
{
	return(
			<View style={stylez.ContainerStyle}>
				{ props.children }
			</View>
		 	);			
};

const stylez={
	ContainerStyle:{
		borderBottomWidth:1,
		padding:5,
		backgroundColor:'#fff',
		justifyContent:'flex-start',
		flexDirection:'row',
		borderColor:'#ddd',
		position:'relative'

	}
};

export { CardSection };