
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
          <AppContainer/>
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
  Messages, Feeds, Indexs,
},{
  navigationOptions: ( { navigation } )=>{
    const {routeName}= navigation.state.routes
    [navigation.state.index];
    return{
      headerTitle: routeName,
      headerTitleStyle:{
        textAlign:"center", flexGrow:1, alignSelf:"center"}
    };
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  DashBoard :{ screen:DashBoardStackNavigator},
  Feeds :{screen:Feeds},
  Indexs:{screen:Indexs},
  Messages:{screen:Messages}
},{
  drawerPosition:'Left',
  // drawerBackgroundColor:'#000'
},{
  defaultNavigationOptions: ( { navigation } )=>{
    return{
      headerTitle: routeName,
      // headerLeft: (<Icon name="chevron-left"
      //   onPress={()=> navigation.navigate('welcome')}
      //     style={{fontSize:30, paddingLeft: 10}} />),

      headerLeft: (<Icon name="navicon" 
        onPress={()=> navigation.openDrawer()}
          style={{fontSize:20, paddingLeft: 10,}}/>),

      headerTitleStyle:{
        textAlign:"center", flexGrow:1, alignSelf:"center"}
    };
  }
}
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
