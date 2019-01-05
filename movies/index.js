import React,{Component} from 'react';
import {AppRegistry,
 StyleSheet,
 Text,
 Dimensions,
 TextInput,
 View} from 'react-native';
import ImageElement from './App/component/ImageElement';

export default class App extends Component<Props> {
 
 	state ={
 		images:[
 			{title: 'out of time', img: require('./App/img/img1.jpg') }, 
 			{title: '12 strong', img: require('./App/img/img2.jpg') }, 
 			{title: 'batman vs superman', img: require('./App/img/img3.jpg') }, 
 			{title: '50 shades of gray', img: require('./App/img/img4.jpg') }, 
 			{title: 'mission imposible', img: require('./App/img/img5.jpg') }, 
 			{title: 'wrong turn', img: require('./App/img/img6.jpg') }, 
 			{title: 'start eye', img: require('./App/img/img7.jpg') }, 
 			{title: 'dido hunter', img: require('./App/img/img8.jpg') } 
 		],
 		imagesRefrence: [],
 		text:'',
 	}
 	componentDidMount(){
 		this.setState({imagesRefrence: this.state.images});
 	}

 	search(text){
 		this.setState({text: text});
 		let imgArr =this.state.images;
 		for(var i =0; i < imgArr.lenght; i++){
 			if(text === imgArr[i].title){
 				this.setState({images: [imgArr[i]]})
 			}
 		}
 	}

 render() {
 	let images = this.state.images.map((val,key) =>{
 			return <View key={key} style={styles.imgWrap}>
 				<ImageElement imgsource={val.img} />
 			</View>
 	});

    return (
      <View style={styles.container}>

      	<TextInput style={styles.textinput}
      	  underlineColorAndroid='transparent'
	      placeholder='search movies'
	      onChangeText={(text)=>this.search(text)}
	      value={this.state.text}
	     />

      	<View style={styles.photoGrid}>
      		{images}
      	</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  textinput:{
  	textAlign: 'center',
  	marginTop: 10,
  	marginBottom: 8,
  	padding: 10,
  	backgroundColor: '#fff'
  },
  imgWrap:{
  	padding: 2,
  	height: 120,
  	width: (Dimensions.get('window').width / 2) -2,
  },
  photoGrid:{
  	flex: 1,
  	padding: 2,
  	flexDirection:'row',
  	flexWrap:'wrap'
  },
 
});

AppRegistry.registerComponent('movies', () => App);
