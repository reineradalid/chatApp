import React, { Component } from 'react';
import { Button, Text, View, StyleSheet ,TextInput,Image,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'


class Task extends Component {
    static navigationOptions = {
        title: 'Task',
        drawerIcon: ({ focused }) => (
          <Icon name="calendar" size={24} color={focused ? '#F26725' : 'black'} />
        ),
      };
    constructor(props) {
        super(props);
        this.state = { testr:'' };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        Test
                    </Text>
                </View>

                
            </View>
            
        );
    }
}

export default Task;