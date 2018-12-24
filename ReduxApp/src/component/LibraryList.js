import React,{Component} from 'react';
import { connect } from 'react-redux';
import {ListView} from 'react-native';
import ListItem from './ListItem'

class LibraryList extends Component{
	
	componentWillMount(){
		const ds= new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource= ds.cloneWithRows(this.props.libraries);
	}
	renderRow(library){
			return <ListItems library={library}/>;
	}
	render(){
		
		return(
			<ListView 
			dataSource={this.dataSource}
			renderRow={this.renderRow}
			/>
			);
	}
}
const mapStatetoProps=state =>{
	 	return{library: state.libraries};
}
export default connect(mapStatetoProps)(LibraryList);