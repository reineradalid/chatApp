
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  Button} from 'react-native';
import {
  createAppContainer, 
  createDrawerNavigator, 
 } from 'react-navigation';

 import myStore from '../Store';

import Indexs from  './index';
import {GET} from '../functions/API/init';
import { AsyncStorage } from 'react-native';




export default class Home extends React.Component{

  componentDidMount(){
    
  }

  render() {
    console.log(myStore.getState());
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true}/>
          <AppContainer/>
     </View>
    );
  }
}


class DashBoardScreen extends Component{

  componentDidMount(){

    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(AsyncStorage);
    Parse.serverURL = 'https://js-parse.ml:1337/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  

    GET(Parse);

  }


  render(){
    return(
        <View  style={styles.container}>

          <Text>DashBoardScreen</Text>
          <Button title="TEST API"/>
        </View>
    );
  }
}

class Feeds extends Component{
  render(){
    return(
        <View  style={styles.container}>
          <Text>Feeds</Text>
          </View>
    );
  }
}
const AppDrawerNavigator = createDrawerNavigator({
  DashBoard :{ screen: DashBoardScreen },
  Feeds :{screen:Feeds},
  Indexs:{screen:Indexs}
},{
  drawerPosition:'Left',
  // drawerBackgroundColor:'#000'
});
const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
