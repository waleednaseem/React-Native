import React from 'react';
import { Text , View , Image ,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails=({album})=>{
		const	{title, artist, thumbnail_image, image , url}=album;
		
		const {
			headerContentstyle,
			thumbnail,
			thumbnailStyle,
			headerText,
			images
		}=styles;
	return(
		<Card>
			 <CardSection>
			 	<View style={thumbnailStyle}>
			 		<Image
			 		style={thumbnail}
			 		source={{uri: thumbnail_image }}
			 		 />
			 	</View>				 
				 <View style={headerContentstyle}>
					<Text style={headerText}> {title} </Text> 
					<Text> {artist} </Text> 
				 </View>          
	         </CardSection>
	         <CardSection>
	         	<Image 
	         	style={images}
	         	source={{uri: image}}
	         	/>
	         </CardSection>
	         <CardSection>
	         <Button onPress={()=> Linking.openURL(url)}>
	         Buy now
	         </Button>
	         </CardSection>
        </Card>
      );

};

const styles={
	headerContentstyle:{
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginLeft:10,
		marginRight:10,
	},
	thumbnail:{
		width:50,
		height:50
	},
	headerText:{
		fontSize: 18
	},
	images:{
		width: null,
		flex: 1,
		height:300
	},
	thumbnailStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight:10

	}
};

export default AlbumDetails;