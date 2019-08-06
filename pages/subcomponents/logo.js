import React, { Component } from 'react';
import {View,StyleSheet, Image} from 'react-native';


class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = { txt:'' };
    }
    render() {
        return (
          <View style={{flex:1}}>
            <View style={styles.container}>
               <Image source={require('../assets/logo.png')} style={{width:320, height:120, alignItems:'center', justifyContent:'center'}} />
            </View>
            </View>
           
        );
    }
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
     
    
    },
    
  });

  

export default Logo;