import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';


export default class ImageElement extends Component<Props> {
  render() {
    return (
      <Image source={this.props.imgsource} style={styles.images}/>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
