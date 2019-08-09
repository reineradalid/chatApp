import React, { Component } from 'react';
import {Text, View, StyleSheet ,TextInput,Image,StatusBar} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ant_icon from 'react-native-vector-icons/AntDesign'
import Calendars from './subcomponents/calendar';
import * as Font from 'expo-font';
import {
    Button,
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
  } from '@ant-design/react-native';


import * as Font from 'expo-font';


export default  class Dashboard extends React.Component {
    static navigationOptions = {
        title: 'Dashboard',
        drawerIcon: ({ focused }) => (
          <Icon name="view-dashboard" size={24} color={focused ? '#F26725' : 'black'} />
        ),
      };
    constructor(props) {
        super(props);
        this.onClose = () => {
            this.setState({
              visible: false,
            });
          };
        
        this.state = {
          
            testr:'' ,
            tasks:[
                {
                    id:'1',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low'
                },
                {
                    id:'2',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Normal'
                },
                {
                    id:'3',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Normal'
                },
                {
                    id:'4',
                    Task:'Sample task',
                    Desc:'sapmple description', priorityLevel:'High'
                },
                {
                    id:'5',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low'
                }
            ],
            steps1: [
                { title: 'Finished', description: 'This is description' },
                { title: 'In Progress', description: 'This is description' },
                { title: 'Waiting', description: 'This is description' },
              ],
        };
    }


    openModal=()=>{
      this.setState({ visible: true })
    }


    render() {
        const footerButtons = [
            { text: 'Complete', onPress: () => console.log('Complete') },
            { text: 'Cancel', onPress: () => console.log('ok') },
            { text: 'Close', onPress: () => this.onClose },
          ];
        return (
            <View style={{flex:1, flexDirection:'column'}}>
                <StatusBar hidden={true}/>
             
                <View style={styles.header}>
    
                    <View  style={{ marginTop:5, marginLeft:12, flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                            <Ant_icon name='bars' style={{alignItems : 'flex-start', fontSize : 30, color : '#fff'}}/>
                        </TouchableOpacity>
                        

                        <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>
                               
                            <Text mul style={{fontSize:25, fontWeight: 'bold', color:'#fff'}}>My Dashboard</Text>
                        </View>
                    </View>
                    {/* <TouchableHighlight style={styles.searchBarStyle}>
                        
                        <TextInput
                        placeholder="Search"
                        style={{ flex:1, width:'100%', marginLeft:10, marginRight:10}}
                        />
                    </TouchableHighlight> */}
                </View>

                <ScrollView style={{marginBottom:10}}>
                    <View style={{justifyContent:'center',alignContent:'center', backgroundColor:'#1A3C6B', marginTop:10, marginLeft:10, marginRight:10, height:38, borderTopEndRadius:8, borderTopStartRadius:8}}>
                        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#fff'}}>Events</Text>
                    </View>
                        <Calendars />
            

                    <View style={{marginTop:15, marginLeft:10, marginRight:10}}>
                        <View style={{justifyContent:'center',alignContent:'center', backgroundColor:'#1A3C6B', margin:3, height:38, borderTopEndRadius:8, borderTopStartRadius:8}}>
                            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#fff'}}>Task</Text>
                        </View>
                        <ScrollView style={{height: 350,}}>
                            {this.state.tasks.map((taskList) =>
                                <View key={taskList.id}>
                                                
                                    <TouchableOpacity style={{ height:65, margin:8, backgroundColor:'#1dd1a1', borderRadius:8}} >
                                        
                                           <View style={{flexDirection:'row'}}>
                                               <View style={{flexDirection:'column', flex:5}}>
                                                    <Text style={styles.nameStyle}>{taskList.Task}</Text>
                                                    <Text style={styles.sampleMessage}>{taskList.Desc}</Text>
                                                    
                                                </View>
                                                <View style={{ flex:1,backgroundColor:'#fff', flexDirection:'column-reverse',borderRadius:50, height:'30%', margin:5, justifyContent:'center', alignItems:'center'}}>
                                                    <Text style={{ fontSize:14, fontWeight:'500', margin:5}}>{taskList.priorityLevel}</Text>
                                                </View>

                                            </View>
                                            
                    
                                    </TouchableOpacity>
                                </View>)} 
                               

                        </ScrollView>
                        
                    </View>
                </ScrollView>

                <Modal
                        title={this.state.title}
                        transparent
                        onClose={this.onClose}
                        maskClosable
                        visible={this.state.visible}
                        // closable
                        footer={footerButtons}
                        style={{width:"98%", height:"70%", marginLeft:10, marginRight:10}}
                        >
                        <View style={{ paddingVertical: 20 }}>
                            <Text style={{ textAlign: 'center' }}>Content...</Text>
                            <Text style={{ textAlign: 'center' }}>Content...</Text>
                        </View>
                        
                    </Modal>

                
            </View>
            
        );
    }
}




const styles = StyleSheet.create({
    nameStyle:{marginLeft:20, fontSize:20, fontWeight:'bold',color:'#fff', marginTop:5,

    },sampleMessage:{
        marginLeft:20, fontSize:18, color:'#fff', marginRight:10, textAlign: 'justify', marginBottom:10
    },
    imageStyle:{
        width: 60, height: 60, borderRadius:50,
    },
    searchBarStyle:{
    flexDirection:"row",
     height: 50, 
    borderColor:'black',
    backgroundColor:'rgba(220,220,220, 0.5)',
     marginRight:10, 
     marginLeft: 10,  
     alignItems:"center",
    },
    header:{
        height: 70, 
        marginBottom:5,
        backgroundColor: '#F26725', 
        justifyContent: "center", 
        alignContent: "center",
       
    },
    body:{  
        // backgroundColor: '#c6e2ff', 
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        borderRadius: 8,
    },
    message:{
        height:70,
        marginLeft:5,
        marginRight:5,
        marginBottom:10,
        marginTop:10,
        
        //  flexDirection:(this.state.row), 
     alignItems:'center', flexDirection:'row-reverse'
    } ,
    buttonStyle:{
        height: 50, 
        backgroundColor: '#009fff', 
        marginBottom:10,
        borderRadius: 8,
        width: 100,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:140

    }
   });

