import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native';
import{ createDrawerNavigator, createAppContainer, NavigationActions, DrawerItems, } from 'react-navigation'
import Login from './pages/login.js';
import About from './pages/drawer.js';

export default class App extends React.Component {
  render() {
    return (
        
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', marginTop: StatusBar.currentHeight}}>
      <View>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View>
        <StatusBar hidden={false} />
      </View>
    </View>
    <View style={{flex: 1}}>
    <MyApp/>
    </View>
    </SafeAreaView>
    );
  }
}


const DrawerContent = props =>(
  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
  <View style={{flex:1}} >
    
      <View>
    <DrawerItems  style={{fontSize:30}} {...props}/>
    </View>
  </View>
   </SafeAreaView>
 
);

const DrawerNavigator = createDrawerNavigator({
  Login:{
    screen:Login,
    navigationOptions: {
      drawerLabel: 'Login',
      // drawerIcon: ({focused, tintColor}) => (
      //   <Icon name="home"  color={focused?color="#fff": color="#1999CE"} style={{fontSize:25,}}/>
      // ),
      }
  
    },
  About:{
    screen:About,
    navigationOptions: {
      drawerLabel: 'Info',
      // drawerIcon: ({focused, tintColor}) => { return(
      //   <Icon name="info"  
      //           color={focused?color="#fff": color="#1999CE"} style={{fontSize:25,}}/>
      // )
    
      }
    },
  
  },
  {
    contentComponent: DrawerContent,
    drawerWidth:200,
    drawerType:'front',
   contentOptions:{
      activeTintColor :'#ffffff',
      inactiveTintColor :'#2196F3',
      activeBackgroundColor :'#2196F3',
      inactiveBackgroundColor :'#ffffff',
      labelStyle:{
        fontSize:20,
        fontStyle:"italic"
      },
      iconContainerStyle: {
        opacity: 1,
      }
    }
  },
)
const MyApp =createAppContainer(DrawerNavigator);

