import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    ImageBackground
}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from './subcomponents/logo.js';
import Form from './subcomponents/Form.js';
import { connect } from 'react-redux'; 
import {isLoggedIn} from '../Action'


class Login extends Component{
  constructor (props){
    super(props);

    this.state = {
      loginStatus : true
    }

  }
    render(){
        
        this.props.isLoggedIn;



        return (
            <ImageBackground source={{uri:`https://pbs.twimg.com/media/D7HiTLAX4AMaUl-.jpg`}} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1}} >        
          <StatusBar hidden={false} translucent={true} barStyle={"dark-content"} backgroundColor={'rgba(255,255,255,0.3)'}/>
                 <View style={styles.container}>
                   
                    <Logo/>
                    <Form navigation={this.props.navigation}/>
                 </View>
            </View>
            </ImageBackground>
           );
    }

}

function mapStateToProps(state){
  return{
    login_status: state.loginStatus
  }
}

export default connect(mapStateToProps, {isLoggedIn})(Login);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputBox: {
      width: 300,
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#fff',
      marginVertical:10,
      backgroundColor:'rgba(255,255,255,0.3)'
    },
    ButtonStyle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center'
    },Button:{
        width: 300,
        borderRadius:25,
        paddingVertical:12,
        fontSize:16,
        marginVertical:10,
        backgroundColor:'rgba(255,255,255,0.3)'
    }
});

