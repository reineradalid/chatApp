import React, { Component } from 'react';
import {Text, View, StyleSheet,StatusBar, Modal} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator, createAppContainer} from 'react-navigation';

import ActionButton from 'react-native-action-button';


export default class Task extends Component {
    static navigationOptions = {
        title: 'Task',
        drawerIcon: ({ focused }) => (
          <Icon name="calendar" size={24} color={focused ? '#F26725' : 'black'} />
        ),
      };
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render(){
        console.log(this.props.navigation);
        
          return (
              <View style={{flex:1}}>
                 <Taskcontainer/>
              </View>
            );
      }  
  }
  export  class TaskTrends extends React.Component{
    constructor(props){
      super(props);
        this.state = {
  
            tasks:[
                {
                    id:'1',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'2',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Normal',
                    date:'2019-15-03'
                },
                {
                    id:'3',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Normal',
                    date:'2019-15-03'
                },
                {
                    id:'4',
                    Task:'Sample task',
                    Desc:'sapmple description', priorityLevel:'High',
                    date:'2019-15-03'
                },
                {
                    id:'5',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'6',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'7',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'8',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'9',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'10',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                },
                {
                    id:'11',
                    Task:'Sample task',
                    Desc:'sapmple description',
                    priorityLevel:'Low',
                    date:'2019-15-03'
                }
            ]
        }
    }
    
     
      render(){
          console.log(this.state.message);
          const {navigate} = this.props.navigation;
     
            return (
                <View>
                  <StatusBar hidden={true}/>
                            
             
                        <View style={styles.header}>
            
                            <View  style={{ marginTop:5, marginLeft:12, flexDirection:'row'}}>
                                                    
                                <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>      
                                    <Text mul style={{fontSize:25, fontWeight:"bold", color:'#fff'}}>Task</Text>
                                </View>
                            </View>
                            {/* <TouchableHighlight style={styles.searchBarStyle}>
                                
                                <TextInput
                                placeholder="Search"
                                style={{ flex:1, width:'100%', marginLeft:10, marginRight:10}}
                                />
                            </TouchableHighlight> */}
                        </View>
          
                      <View style={styles.body} >
                        <ScrollView style={{height:"90%"}}>
                                {this.state.tasks.map((taskList) =>
                                    <View key={taskList.id}>
                                                    
                                        <TouchableOpacity style={{ height:80, margin:8, backgroundColor:'#1dd1a1', borderRadius:8}} >
                                            
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{flexDirection:'column', flex:5}}>
                                                        <Text style={styles.nameStyle}>{taskList.Task}</Text>
                                                        <Text style={styles.sampleMessage}>{taskList.Desc}</Text>
                                                        <Text style={{ fontSize:12, color:"#fff",marginLeft:20}}>{taskList.date}</Text>
                                                 </View>
                                               
                                                    <View style={{ flex:1,backgroundColor:'#fff', flexDirection:'column-reverse',borderRadius:50, height:'30%', margin:5, justifyContent:'center', alignItems:'center'}}>
                                                        <Text style={{ fontSize:14, fontWeight:'500', margin:5,flexDirection:'row'}}>{taskList.priorityLevel}</Text>
                                                    </View>
                                                
                                                    
                                                       
                                                    
                                                </View>
                                                
                        
                                        </TouchableOpacity>
                                       
                                    </View>)} 
                                        
                             
                     

                            </ScrollView>
                            
                      </View>
                      <ActionButton
                            style={{
                                    fontSize: 30,
                                   }}
                            elevation={1000}
                            offsetY={10}
                            buttonColor="rgba(231,76,60,1)"
                            onPress={() => { console.log("hi")}}
                            />

                    
                    
                   


                   
          
          
                </View>
              );
        }  
  
  }
  
  
  const stackNavigation = createStackNavigator({
    TaskTrends: {
         screen: TaskTrends,
         navigationOptions: () => ({
           title: `MessageTrends`,
           headerBackTitle: null
         }),
         
       },
        
     },
     {
       headerMode: 'none',
       navigationOptions: {
         headerVisible: false,
       }
      }
     );
     
     const Taskcontainer = createAppContainer(stackNavigation)
     
  

const styles = StyleSheet.create({
    nameStyle:{marginLeft:20, fontSize:20, fontWeight:'bold',color:'#fff', marginTop:5,

    },sampleMessage:{
        marginLeft:20, fontSize:18, color:'#fff', marginRight:10, textAlign: 'justify'
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

