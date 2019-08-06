import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    KeyboardAvoidingView
}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from './logo';



export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = { username: '', password:'' };
      }
  
    render(){
        return (
            <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
            <View style={{flex:1}} >
               
               
                 <View style={styles.container}>
              
                 <TextInput
                    style={styles.inputBox}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    underlineColorAndroid='rgba(255,255,255,0)'
                    placeholder='Username'
                    placeholderTextColor='#95a5a6'
                />    
                 <TextInput
                    style={styles.inputBox}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    underlineColorAndroid='rgba(255,255,255,0)'
                    placeholder='Password'
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                    
                />  
                <TouchableOpacity style={styles.Button}  onPress={() => this.props.navigation.navigate('Home')}  >
                    <Text style={styles.ButtonStyle}>Login</Text>
                </TouchableOpacity>       
                 </View>
            </View>
            </KeyboardAvoidingView>
           );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    
    
    },
    inputBox: {
      width: 350,
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#fff',
      marginVertical:10,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderColor:'#F26725',
      paddingVertical:10,
      position:'relative'
    },
    ButtonStyle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center'
    },Button:{
        width: 350,
        borderRadius:25,
        paddingVertical:12,
        fontSize:16,
        marginVertical:10,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderColor:'#F26725',
        position:'relative'

    }
  });
  