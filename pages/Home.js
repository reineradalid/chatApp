
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


// const DashBoardTabNavigator= createBottomTabNavigator({
//   Feeds, Profile, Setting
// },{
// navigationOptions:({navigation})=>{
//   const {routeName}= navigation.state.routes
//   [navigation.state.index];
//   return{
//     headerTitle: routeName
//   };
// }  
// }
// );

// const DashBoardStackNavigator= createStackNavigator({
//   DashBoardTabNavigator: DashBoardTabNavigator
// },{
//   defaultNavigationOptions: ( { navigation } )=>{
//     return{
//       // headerLeft: (<Icon name="arrow-back"
//       //   onPress={()=> navigation.navigate('welcome')}
//       //     style={{fontSize:30, paddingLeft: 10}} />),

//       headerLeft: (<Icon name="menu" 
//         onPress={()=> navigation.openDrawer()}
//           style={{fontSize:30, paddingLeft: 10}}/>),

//       headerTitleStyle:{
//         textAlign:"center", flexGrow:1, alignSelf:"center"}
//     };
//   }
// });


const AppDrawerNavigator = createDrawerNavigator({
  DashBoard :{ screen: DashBoardScreen },
  Feeds :{screen:Feeds},
  Indexs:{screen:Indexs}
},{
  drawerPosition:'Left',
  
  
});

// const AppSwitchNavigator = createSwitchNavigator({
//   DashBoard:{ screen:AppDrawerNavigator}
// });

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
