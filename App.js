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
import Home from './pages/Home'
import { createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from '@ant-design/react-native'




export default class App extends React.Component{

  constructor (props){
    super(props);

    

  }

  render(){
    return (
      
      <Provider>
        <View style={{flex:1}}>
            <Appcontainer />
        </View>
      </Provider>
    );
  
  }

}


const stackNavigation = createStackNavigator({
 Login: {
    screen: Home,
    navigationOptions: () => ({
      title: `Login`,
      headerBackTitle: null
    }),
    
  },
 Home: {
    screen: Home,
  },
   navigationOptions: () => ({
    title: `Home`,
    headerBackTitle: null
  }),
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


