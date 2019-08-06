/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Login from './pages/login.js';
import Logo from './pages/subcomponents/logo.js';
import { createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return (
      <View style={{flex:1}}>
        
   
         <Appcontainer/>
    
      </View>
    );
  
  }

}

 

const stackNavigation = createStackNavigator({
 Login: {
    screen: Login,
  },
 Logo: {
    screen: Logo,
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);

const Appcontainer = createAppContainer(stackNavigation)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  
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


