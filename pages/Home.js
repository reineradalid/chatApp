
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
  createStackNavigator
 } from 'react-navigation';
 
import Indexs from  './index';
import Messages from './messages'


export default class Home extends React.Component{


  render() {
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
