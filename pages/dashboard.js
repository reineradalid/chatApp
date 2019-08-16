import React, { Component } from 'react';
import {Text, View, StyleSheet,StatusBar,TextInput} from 'react-native';
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
            title:'SAMPLE',
            taskmodalPriority:'High',
            modalStartDate:'02/09/2019',
            modalEndDate:'02/09/2019',
            modalPrioColor:'#FF0000',
            taskDescription:'People often install a kitty door, only to discover that they have a problem. The problem is their cat will not use the kitty door. There are several common reasons why cats won’t use kitty doors. First, they may not understand how a kitty door works. They may not understand that it is a little doorway just for them. Second, many kitty doors are dark, and cats cannot see to the other side. As such, they can’t be sure of what is on the other side of the door, so they won’t take the risk. One last reason cats won’t use kitty doors is because some cats don’t like the feeling of pushing through the door and having the door drag across their back. But don’t worry—there is a solution for this kitty-door problem. ',
           
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
            { text: 'Close', onPress: () => this.onClose },
          ];
        return (
            <Provider>
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
                                title={<Text style={{fontWeight:'bold', fontSize:20,}}>{this.state.title}</Text>}
                                transparent
                                onClose={this.onClose}
                                maskClosable
                                visible={this.state.visible}
                                // closable
                                footer={footerButtons}
                                style={{width:"98%", marginLeft:15, marginRight:15}}
                                >
                            
                            <View style={{height:300, marginTop:10, borderTopColor:'#F26725', borderTopWidth:0.5, marginLeft:5, marginRight:5}}>
                                <Text style={{ textAlign: "left", fontSize:18, fontWeight:'500', marginTop:10 }}>Description:</Text>
                                    <ScrollView style={{maxHeight:250,backgroundColor:'rgba(220, 220, 220, 0.3)', borderRadius:8, marginTop:20, borderWidth:0.2,borderColor:'black', }}>
                                        <TextInput                                
                                            multiline={true} 
                                            editable = {false}  
                                            value={this.state.taskDescription} 
                                            style={{ maxHeight:'100%',maxWidth:'100%', 
                                            flexDirection:'row',
                                            flexGrow:1,
                                            marginLeft:5,
                                            padding:10,
                                            marginTop:10, 
                                           
                                            alignItems:this.multiline=true?"flex-start":"center",
                                            textAlignVertical: 'top',
                                            // lineHeight: 23,
                                        
                                            fontSize:18,
                                        }} />
                                    </ScrollView> 
                                </View>
                                <View style={{flexDirection:'column-reverse'}}>
                                    <View style={{flexDirection:'row',}}>                                
                                        <Text style={{ textAlign: 'left', flex:5, margin:10, fontSize:15}}>{this.state.modalStartDate} - {this.state.modalEndDate}</Text>
                                        <Text style={{ 
                                            textAlign: 'center', 
                                            flex:1,
                                            color:"#fff" ,
                                            fontSize:15, 
                                            fontWeight:'500',
                                            margin:10,
                                            backgroundColor:this.state.taskmodalPriority ==="Low"? "#ffd500": this.state.taskmodalPriority ==="Medium" ? "#41d900": "#ff3b3b",
                                            borderRadius:8}}>
                                            {this.state.taskmodalPriority}
                                            </Text>  
                                    </View>
                                </View>                
                        </Modal>
            </View>
            </Provider>
            
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

