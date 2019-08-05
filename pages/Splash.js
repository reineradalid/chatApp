
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class Splash extends React.Component {
  render() {
    return (
     <View style={{flex:1}} >
          <View style={styles.container}>
            {/* <Image
              style={{height:150, width:175}}
              source={require('./logokoto.png')}/> */}
            <Text style={{fontSize:30, fontStyle:"italic",fontWeight:'bold', color:"#000"}}>Simple Translator</Text>
          </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
