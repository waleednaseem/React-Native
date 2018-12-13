import React from 'react';
import { Text , View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails=(props)=>{
	return(
		<Card>
			 <CardSection>
				 <View></View>
				 <View style={styles.headerContentstyle}>
					<Text> {props.album.title} </Text> 
					<Text> {props.album.artist} </Text> 
				 </View>          
	         </CardSection>
        </Card>
      );

};

const styles={
	headerContentstyle:{
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default AlbumDetails;