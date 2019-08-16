import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
} from 'react-navigation';
import Messages from './messages';
import Dashboard from './dashboard';
import Task from './task'
import Events from './events'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Userinfo  from '../pages/subcomponents/drawerUser';



logout = () => {
  console.log("LOGOUT");
}


const CustomDrawerContentComponent = props => (
  
  <ScrollView style={{flex:1, minHeight:800}}>
      
      <Userinfo />
      

       <DrawerItems {...props} />
      <TouchableOpacity style={{height:500}} onPress={() => this.logout()}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Signout</Text>
      </TouchableOpacity>
    
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Dashboard, Messages,Task,Events

  },
  {
    drawerType: 'push',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    minHeight: 60,
    minWidth: 60,
    maxHeight:70,
    maxWidth:70,
    backgroundColor:'#fff',
    alignSelf:'center',
   
    borderRadius:50
  },
});
