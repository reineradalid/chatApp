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

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer';

const store = createStore(Reducer);

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
          <View style={{flex:1}}>
              <Appcontainer/>
          </View> 
      </Provider>
      
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


