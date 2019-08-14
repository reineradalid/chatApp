import React, { Component } from 'react';
import {Text, View, StyleSheet,StatusBar, TextInput} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator, createAppContainer} from 'react-navigation';
import AntIcon from 'react-native-vector-icons/AntDesign'

import ActionButton from 'react-native-action-button';
import {
    Modal,
    Provider,
  } from '@ant-design/react-native';
import EventTrends from './subcomponents/eventsTrends'
import CreateEvent from './subcomponents/createEvent';



export default class Events extends Component {
    static navigationOptions = {
        title: 'Events',
        drawerIcon: ({ focused }) => (
          <Icon name="calendar" size={24} color={focused ? '#F26725' : 'black'} />
        ),
      };

test=()=>{
  this.props.navigation.toggleDrawer()
}

    render(){
        // console.log("test" ,this.state.navigate);        
          return (
              <Provider>
                <View style={{flex:1}}>
                    <Eventcontainer testprops ={this.test}/>
                </View>
              </Provider>
            );
      }  
  }
  
  const stackNavigation = createStackNavigator({
    EventTrends: {screen: props=> <EventTrends {...props}  /> },
    CreateEvent:CreateEvent
    
     },
     {
       headerMode: 'none',
       navigationOptions: {
         headerVisible: false,
       }
      }
     );
const Eventcontainer = createAppContainer(stackNavigation)
