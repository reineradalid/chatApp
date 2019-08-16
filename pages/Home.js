import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import Messages from './messages';
import Dashboard from './dashboard';
import Task from './task'
import Events from './events'
import {getData} from '../storage/storage_action';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icons from 'react-native-vector-icons/AntDesign'




let my_name = null
let my_pic = null
let my_position = null

GETMYDATA = () =>{

  var data =  getData("LOGIN_DATA");
  data.then(mydata => {
    extracted = JSON.parse(mydata);
    my_name = extracted.f_name + ' ' + extracted.l_name
    my_pic = 'https://crm.jobstreamapp.io/assets/user_img/' + extracted.img
    my_position = extracted.position
  })
console.log('dadadda')
}

GETMYDATA();


const CustomDrawerContentComponent = props => (
  
  <ScrollView style={{flex:1, minHeight:500}}>
      <View style={{ height:"42%", backgroundColor: '#F26725', marginBottom : 5}}> 
        <View style={{
              minHeight: 70,
             width: "100%",
              maxHeight:80,
             
              marginTop:"8%",
              marginBottom:5,
              borderRadius:50,
              justifyContent:'center',
              alignItems:'center'}}>
          <Image
            style={styles.image}
            source={{
              uri: my_pic,
            }}
          />
        </View>
        
          <Text style={{textAlign: 'center', color : '#fff', fontSize : 18, fontWeight : 'bold'}}>{my_name}</Text>
          <Text style={{ marginLeft:'20%', marginRight:'20%',textAlign: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 1, paddingBottom: 1, borderRadius : 50, backgroundColor : '#fff'}}>{my_position}</Text>
        
      </View>
      

       <DrawerItems {...props} />
      <TouchableOpacity  style={{height:60, flexDirection:'row',marginTop:5}}>
        <Icons name="logout" color="#F26725" fontWeight={300} size={24} style={{fontWeight:'300', textAlign:'center' ,flex:1, marginLeft:5, }} />
        <Text style={{fontSize:15, fontWeight:'bold', flex:5, marginLeft:"9%"}}>Signout</Text>
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
