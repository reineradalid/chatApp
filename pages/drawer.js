

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,TextInput, Image} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default class About extends React.Component{
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:50, backgroundColor:"#0063B2FF", justifyContent: "center"}}>
          <View style={{position:"absolute"}}>
           <TouchableOpacity  onPress={()=> this.props.navigation.toggleDrawer()}>
              {/* <Icon name="menu" color="#fff" style={{fontSize: 30, paddingLeft: 10 }} /> */}
           </TouchableOpacity>
         </View>
        </View>

        <View>
            <Text>Test
                </Text>
            </View>

      
      </View> 
  );
}
}
