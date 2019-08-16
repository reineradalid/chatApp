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
import Icons from 'react-native-vector-icons/AntDesign';
import {removeData, getData} from '../storage/storage_action';
import CHECKER from '../functions/API/checker'



logout = (props) => {
  removeData('LOGIN_DATA');
  props.navigation.navigate('Login')

  const stored = getData('LOGIN_DATA');
  stored.then(data =>{
    console.log(data);
  })
}

checker = (props) => {

  const stored = getData('LOGIN_DATA');
  const new_data = stored.then(data => {
      if(data === undefined){
          props.navigation.navigate('Login');
      }

  });
}
 




const CustomDrawerContentComponent = props => (
  
  <ScrollView style={{flex:1, minHeight:800}} onLayout={() => checker(props)}>
      {/* <CHECKER props={props}/> */}
      <Userinfo />
      

       <DrawerItems {...props} />
       <TouchableOpacity  style={{height:60, flexDirection:'row',marginTop:5}} onPress={() => logout(props)}>
        <Icons name="logout" color="#F26725" fontWeight={300} size={24} style={{fontWeight:'300', textAlign:'center' ,flex:1, marginLeft:5, }} />
        <Text style={{fontSize:15, fontWeight:'bold', flex:5, marginLeft:"9%"}}>Signout</Text>
      </TouchableOpacity>
    
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Dashboard, 
    Messages,
    Task,
    Events

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
