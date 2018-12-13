import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './component/header';
import Albumlist from './component/Albumlist'

const App=()=>(
	<View>
		<Header headerText={'Albums'} />
		<Albumlist />
	</View>
	);



AppRegistry.registerComponent('myApp', () => App);
