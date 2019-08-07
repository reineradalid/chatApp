import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {isLoggedIn, isLoggedOut} from '../Action';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
              <View style={{height:50, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
                
                  <Text style={{textAlign:'left', color:'#fff', fontSize:20, fontWeight:'bold'}}>Left</Text>
               
              </View>
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

