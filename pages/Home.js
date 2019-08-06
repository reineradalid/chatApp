import React, { Component } from 'react';
import {View,StyleSheet, Text,SafeAreaView,StatusBar} from 'react-native'
import {createDrawerNavigator,createAppContainer, NavigationActions, DrawerItems,} from 'react-navigation'
import Login from './login'
import Indexs from './index'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends React.Component {
    
    render() {
        return (
            <View style={{flex:1 , margin:StatusBar.currentHeight}}> 
                <View style={styles.container}>
                    <Text>
                        Text
                    </Text>
                    <DrawerApp/>
                    <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}><Text>Test</Text></TouchableOpacity>
                </View>

            </View> 
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
    // Login:{
    //   screen: Login,
    //   navigationOptions: {
    //     drawerLabel: 'Login',
    //     // drawerIcon: ({focused, tintColor}) => (
    //     //   <Icon name="home"  color={focused?color="#fff": color="#1999CE"} style={{fontSize:25,}}/>
    //     // ),
    //     }
    
    //   },
      Indexs:{
      screen:Indexs,
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
const DrawerApp = createAppContainer(DrawerNavigator)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default Home;