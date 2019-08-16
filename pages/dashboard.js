import React, { Component } from 'react';
import {Text, View, StyleSheet,StatusBar} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import Calendars from './subcomponents/calendar';
import {READ_TASK} from '../functions/API/taskAPI';

import * as Font from 'expo-font';
import {
    Button,
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
  } from '@ant-design/react-native';


export default  class Dashboard extends Component {
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
            date: '',
            testr:'' ,
            tasks:[],
        };
    }

    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        that.setState({
          //Setting the value of the date time
          date:
          year + '-' + month + '-' + date ,
        });
        var event_data = READ_TASK();



        event_data.then(data =>{this.setState({tasks :JSON.parse(data)})})
      }

    render() {
        console.log(this.state.date);
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
                        <TouchableOpacity>                           
                            <Icons name='bars' style={{fontSize : 24, color : '#fff'}} onPress={() => this.props.navigation.toggleDrawer()}/>
                        </TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>      
                            <Text mul style={{fontSize:25, fontWeight:"bold", color:'#fff'}}>Dashboard</Text>
                        </View>
                    </View>
                </View>

                <ScrollView style={{marginBottom:10}}>
                    <View style={{justifyContent:'center',alignContent:'center', backgroundColor:'#1A3C6B', marginTop:10, marginLeft:10, marginRight:10, height:38, borderTopEndRadius:8, borderTopStartRadius:8}}>
                        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#fff'}}>Events</Text>
                    </View>
                        <Calendars />
            

                    <View style={{marginTop:15, marginLeft:10, marginRight:10}}>
                        <View  style={{ elevation:7,justifyContent:'center',alignContent:'center', backgroundColor:'#1A3C6B',  height:38, borderTopEndRadius:8, borderTopStartRadius:8}}>
                            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#fff'}}>Task</Text>
                        </View>
                        <ScrollView style={{height: 350, borderColor:'black', borderRadius:8, borderWidth: 0.3,marginBottom:20, marginTop:-5, paddingTop:10}}>
                            {this.state.tasks.slice(-5).reverse().map((taskList) =>
                                <View key={taskList.objectId} style={{  
                                          
                                    borderWidth:0.1, 
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width:0,
                                        height:3,
                                    },
                                    shadowOpacity: 1.0,
                                    shadowRadius: 5,
                                    elevation:2,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    marginTop: 10,
                                    marginBottom:20}}>             
                                    <TouchableOpacity
                                            onPress={() => {this.setState({ visible: true , title:taskList.title, taskDescription: taskList.description, modalStartDate:taskList.start, modalEndDate:taskList.end , taskmodalPriority:taskList.priority})}}
                                            style={{ minHeight:110, maxHeight:200, margin:8, }} >
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flexDirection:'column', flex:5}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={styles.nameStyle}>{taskList.title}</Text>
                                                    {taskList.priority ==="Low" ? 
                                                        <Text style={{ fontSize:16, fontWeight:'500', margin:5,flex:2, textAlign:'center', color:'#ffd500'}}>{taskList.priority}</Text>
                                                        : 
                                                        taskList.priority ==="Medium"? 
                                                        <Text style={{ fontSize:16, fontWeight:'500', margin:5,flex:2, textAlign:'center', color:'#41d900'}}>{taskList.priority}</Text>
                                                        :
                                                        <Text style={{ fontSize:16, fontWeight:'500', margin:5,flex:2, textAlign:'center', color:'#ff3b3b'}}>{taskList.priority}</Text>
                                                    }
                                                    
                                                </View>
                                                <View style={{marginLeft:20,height:50,borderWidth:0.5, backgroundColor:'rgba(220, 220, 220, 0.3)', marginRight:20, marginTop:10,borderRadius:2}}>
                                                   
                                                    <Text                    
                                                        numberOfLines={1}
                                                        style={{ maxHeight:'100%',maxWidth:'100%', 
                                                        flexDirection:'row',
                                                        flexGrow:1,
                                                        marginLeft:5,
                                                        padding:10,
                                                        marginTop:5, 
                                                        alignItems:this.multiline=true?"flex-start":"center",
                                                        textAlignVertical: 'top',
                                                        // lineHeight: 23,
                                                    
                                                        fontSize:18,
                                                    }} >
                                                        {taskList.description}
                                                        </Text>
                                                </View>
                                                
                                                <Text style={{ fontSize:14, color:"#000",marginTop:5, textAlign:'center'}}>{taskList.start} - {taskList.end}</Text>         
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
    nameStyle:{
        marginLeft:20, 
        fontSize:20, 
        fontWeight:'bold',
        color:'#000', 
        marginTop:5,
        flex:6

    },sampleMessage:{
        marginLeft:10, 
        fontSize:18, 
        color:'#000', 
        marginRight:10, 
        textAlign: 'justify',
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

