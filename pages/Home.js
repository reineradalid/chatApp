// Docs: https://reactnavigation.org/docs/en/drawer-navigator.html
// Ionicons: http://ionicons.com
// Brent Vatne: https://twitter.com/notbrent
// Eric Vicenti: https://twitter.com/EricVicenti
// Video Tutorial: https://www.youtube.com/watch?v=ZzhOjO-1dCs

import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import Messages from './messages';
import Task from './task';
import {getData} from '../storage/storage_action';


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

}

GETMYDATA();


const CustomDrawerContentComponent = props => (
  
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
     
      <View style={{flexDirection: 'row', backgroundColor: '#F26725', borderTopLeftRadius: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 40, borderTopRightRadius: 40, marginBottom : 15}}> 
        <Image
          style={styles.image}
          source={{
            uri: my_pic,
          }}
        />
        <View style={{flexDirection: 'column', marginTop: 15}}> 
          <Text style={{textAlign: 'center', color : '#fff', fontSize : 18, fontWeight : 'bold'}}>{my_name}</Text>
          <Text style={{textAlign: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 1, paddingBottom: 1, borderRadius : 50, backgroundColor : '#fff'}}>{my_position}</Text>
        </View>
      </View>
      

       <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Task, Messages

  },
  {
    drawerType: 'push',
    drawerPosition: 'left',
    drawerWidth: 200,
    // drawerBackgroundColor: 'orange',
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
    height: 60,
    width: 60,
    marginLeft: 20
  },
});
