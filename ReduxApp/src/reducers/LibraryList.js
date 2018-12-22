import React,{Component} from 'react';
import { connect } from 'react-redux';
import {ListView} from 'react-native';
import ListItem from './ListItem'

class LibraryList extends Component{
	
	componentWillMount(){
		const ls= new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource= ls.cloneWithRows(this.props.Libraries);
	}
	renderRow(Library){
			return <ListItems library={Library}/>;
	}
	render(){
		console.log(this.props);
		return(
			<ListView 
			DataSource={this.dataSource}
			renderRow={this.renderRow}
			/>
			}
			);
	}
}
const mapStatetoProps=state =>{
	 	return{Library: state.Library};
}
export default connect()(LibraryList);