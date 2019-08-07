
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  Button} from 'react-native';
  import {
    createSwitchNavigator,
    createAppContainer, 
    createDrawerNavigator, 
    createBottomTabNavigator, 
    createStackNavigator} from 'react-navigation';
    import Icon from 'react-native-vector-icons/FontAwesome'
 import myStore from '../Store';

import Indexs from  './index';
import {GET} from '../functions/API/user';
import { AsyncStorage } from 'react-native';
import Messages from './messages';
import Form from './subcomponents/Form'



export default class Home extends React.Component{

  componentDidMount(){

    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(AsyncStorage);
    Parse.serverURL = 'https://js-parse.ml/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  
  }

  render() {
    console.log(myStore.getState());
    
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true}/>
          <AppContainer />
     </View>
    );
  }
}


class DashBoardScreen extends Component{

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

const DashBoardStackNavigator= createStackNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      title: `Login`,
      headerBackTitle: null
    }),
    
  },
  Indexs: {
    screen: Indexs,
  },
   navigationOptions: () => ({
    title: `Home`,
    headerBackTitle: null
  }),
  Form: {
    screen: Form,
  },
   navigationOptions: () => ({
    title: `Form`,
    headerBackTitle: null
  }),
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const AppDrawerNavigator = createDrawerNavigator({
  Messages :{ screen:DashBoardStackNavigator},
  Feeds :{screen:Feeds},
  Indexs:{screen:Indexs},
  Messages:{screen:Messages},
 
},{
  drawerPosition:'Left',
  // drawerBackgroundColor:'#000'
},
);

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
