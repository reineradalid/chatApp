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
import CreateTask from './subcomponents/createTask'
import TaskTrends from './subcomponents/taskTrends';



export default class Task extends React.Component {
    static navigationOptions = {
        title: 'Task',
        drawerIcon: ({ focused }) => (
          <Icon name="calendar" size={24} color={focused ? '#F26725' : 'black'} />
        ),
      };

    render(){
        // console.log("test" ,this.state.navigate);        
          return (
              <Provider>
                <View style={{flex:1}}>
                    <Taskcontainer />
                </View>
              </Provider>
            );
      }  
  }
  
  const stackNavigation = createStackNavigator({
    TaskTrends: {screen: props=> <TaskTrends {...props} /> },
    CreateTask: CreateTask 
     },
     {
       headerMode: 'none',
       navigationOptions: {
         headerVisible: false,
       }
      }
     );
const Taskcontainer = createAppContainer(stackNavigation)
