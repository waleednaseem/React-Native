import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './component/common';

const App = ()=>{
	
		return(
		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Redux practising application"/>
			</View>
		</Provider>
			);
	
}

export default App;