import React from 'react';
import { Button, Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import {isLoggedIn, isLoggedOut} from '../Action';

class login extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        login_status : false
      }
  }

    render(){
      console.log(this.props);
        return (
            <View style={{flex : 1}}>
              <ImageBackground source={{uri : 'https://wallpaperaccess.com/full/126374.jpg'}} style={{width: '100%', height: '100%'}}>
                <Text>Inside</Text>
              </ImageBackground>
            </View>
          );
    }  
}

function mapStateToProps(state){
  return{
    login_status : state.login_status
  }
}

export default connect(mapStateToProps, {isLoggedIn})(login);