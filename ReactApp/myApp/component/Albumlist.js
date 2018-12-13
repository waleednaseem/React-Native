import React,{Component} from 'react';
import {View} from 'react-native';
import AlbumDetails from './AlbumDetails';
import axios from 'axios';

class Albumlist extends Component {
	
       state={albums: [] };

	componentWillMount()
	{
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(responce => this.setState({albums: responce.data}));
	}
	renderAlbums()
	{
		return this.state.albums.map(album => <AlbumDetails key={album.title} album={album}/> );
	}
	render()
	{
		console.log(this.state);
		return(
		<View>
		{this.renderAlbums()}
		</View>
		);
     }
}
	
export default Albumlist;