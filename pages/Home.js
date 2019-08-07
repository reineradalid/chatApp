
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar} from 'react-native';
import {
  createAppContainer, 
  createDrawerNavigator, 
 } from 'react-navigation';

import Indexs from  './index';



export default class Home extends React.Component{
  render() {
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
