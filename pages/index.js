import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {isLoggedIn, isLoggedOut} from '../Action';

class Indexs extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        login_status : false
      }
  }

    render(){
      console.log(this.props);
        return (
            <View>
              <Button onPress={this.props.isLoggedIn} title="TEST LOGIN"/>
              <Text>This is the index yeah!</Text>
            </View>
          );
    }  
}

function mapStateToProps(state){
  return{
    login_status : state.login_status
  }
}

export default connect(mapStateToProps, {isLoggedIn})(Indexs);

