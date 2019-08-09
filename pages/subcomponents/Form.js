import React, { Component } from 'react';
import {getData} from '../../storage/storage_action.js';

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
import {VERIFY_ACCOUNT} from '../../functions/API/user';
import {GET_MESSAGE_LIST} from '../../functions/API/conversation';

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
                username: 'mickey',
                password: '9456223',
                text_status : 'none',
                error : null
            }; 
    }

    preparedData(){

        const data = {
            username: this.state.username,
            password: this.state.password
        }
        
        return data;

    }

    submitData(){

        var res = VERIFY_ACCOUNT(this.preparedData());

        res.then(data =>{
            console.log(JSON.stringify(data))
            if(data !== 'VALID'){
                this.setState({text_status : null});
                this.setState({error : '(Code : ' + data.code + ')  Error : ' + data.message});
            }else{
                this.props.navigation.navigate('Home')
            }
        })

        var StoredData = getData('LOGIN_DATA');

        StoredData.then(data => {
            console.log('STORED DATA ', data)
        })

        

    }



    render(){
        const {navigate} = this.props.navigation;
        
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
                        placeholderTextColor='#95a5a6'
                        secureTextEntry={true}
                        
                    />  
                    <TouchableOpacity style={styles.Button} onPress={() => {this.submitData()}}>  
                    {/* onPress={() => this.props.navigation.navigate('Home')} */}
                        <Text style={styles.ButtonStyle}>Login</Text>
                    </TouchableOpacity>

                 </View>
                
                <View style={{width : 360, backgroundColor : 'rgba(231, 76, 60, 0.65)'}}>
                    <Text style={{textAlign: 'center', marginBottom: 15, paddingTop: 10, color: '#fff', display: this.state.text_status}}>{this.state.error}</Text>
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
      width: 250,
      borderRadius:10,
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
        width: 220,
        borderRadius:25,
        paddingVertical:12,
        fontSize:16,
        marginVertical:10,
        backgroundColor:'rgba(26, 60, 107, 0.4)',
        borderColor:'#F26725',
        borderWidth: 1,
        position:'relative'

    }
  });
  