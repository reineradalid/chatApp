import React, { Component } from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons'
import { createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from '@ant-design/react-native';
import CreateTask from './subcomponents/createTask'
import TaskTrends from './subcomponents/taskTrends';



export default class Task extends Component {
    static navigationOptions = {
        title: 'Task',
        drawerIcon: ({ focused }) => (
          <Icon name="tasklist" size={24} color={focused ? '#F26725' : 'black'} />
        ),
      };

test=()=>{
  this.props.navigation.toggleDrawer()
}

    render(){      
          return (
              <Provider>
                <View style={{flex:1}}>
                  
                    <Taskcontainer testprops ={this.test}/>
                </View>
              </Provider>
            );
      }  
  }
  
  const stackNavigation = createStackNavigator({
    TaskTrends: {screen: props=> <TaskTrends {...props} testProps={this.props} /> },
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
