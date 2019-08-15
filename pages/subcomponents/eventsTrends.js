import React, { Component } from 'react';
import {Text, View, StyleSheet,StatusBar, TextInput} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign'
import ActionButton from 'react-native-action-button';
import {Modal,Provider,} from '@ant-design/react-native';


export default  class EventTrends extends React.Component{
    constructor(props){
      super(props);
      this.onClose = () => {
        this.setState({
          visible: false,
        });
      };
     
        this.state = {
            teststatus:'Inactive',
            visible: false,
            title:'SAMPLE',
            taskmodalPriority:'High',
            modalStartDate:'02/09/2019',
            modalEndDate:'02/09/2019',
            modalPrioColor:'#FF0000',
            taskDescription:'People often install a kitty door, only to discover that they have a problem. The problem is their cat will not use the kitty door. There are several common reasons why cats won’t use kitty doors. First, they may not understand how a kitty door works. They may not understand that it is a little doorway just for them. Second, many kitty doors are dark, and cats cannot see to the other side. As such, they can’t be sure of what is on the other side of the door, so they won’t take the risk. One last reason cats won’t use kitty doors is because some cats don’t like the feeling of pushing through the door and having the door drag People often install a kitty door, only to discover that they have a problem. The problem is their cat will not use the kitty door. There are several common reasons why cats won’t use kitty doors. First, they may not understand how a kitty door works. They may not understand that it is a little doorway just for them. Second, many kitty doors are dark, and cats cannot see to the other side. As such, they can’t be sure of what is on the other side of the door, so they won’t take the risk. One last reason cats won’t use kitty doors is because some cats don’t like the feeling of pushing through the door and having the door drag across their back. But don’t worry—there is a solution for this kitty-door probacross their back. But don’t worry—there is a solution for this kitty-door problem. ',
            events:[
                {
                    id:'1',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting',     
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Active'
                },
                {
                    id:'2',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting',
                  
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Inactive'
                },
                {
                    id:'3',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting',
                  
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Active'
                },
                {
                    id:'4',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Inactive'
                },
                {
                    id:'5',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Inactive'
                },
                {
                    id:'6',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Active'
                },
                {
                    id:'7',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Inactive'
                },
                {
                    id:'9',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Active'
                },
                {
                    id:'10',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Cancel'
                },
                {
                    id:'11',
                    Event:'Jobstream meeting',
                    Desc:'Weekly jobnstream meeting', 
                    startDate:'02/09/2019',
                    endDate:'02/09/2019',
                    status:'Inactive'
                },
               
            ],
            newTask:[]
        }
    }


    test = () =>{
        
       
    }

      render(){
       console.log("Test Prosp", this)
        const footerButtons = [
            { text: 'Complete', onPress: () => console.log('Complete') },
            { text: 'Cancel', onPress: () => console.log('ok') },
            { text: 'Close', onPress: () => this.onClose },
          ];  
            return (
                <Provider>
                    <View>
                        <StatusBar hidden={true}/>
                            <View style={styles.header}>
                                <View  style={{ marginTop:5, marginLeft:12, flexDirection:'row'}}>
                                    <TouchableOpacity style={{marginLeft:5, marginTop:5}} onPress={()=> {this.props.navigation.navigate('DrawerOpen')}}>
                                        <AntIcon name="bars" style={{fontSize:30, color:'#fff', }}/>
                                    </TouchableOpacity>                 
                                    <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>      
                                        <Text mul style={{fontSize:25, fontWeight:"bold", color:'#fff'}}>Events</Text>
                                    </View>
                                </View>
                            </View>
          
                            <View style={styles.body} >
                                <ScrollView style={{height:"90%"}}>
                                    {this.state.events.map((eventList) =>
                                        <View key={eventList.id} style={{  
                                          
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
                                            marginBottom:10}}>             
                                            <TouchableOpacity
                                                    onPress={() => {this.setState({ visible: true })}}
                                                    style={{ height:120, 
                                                        margin:10,
                                                       
                                                      
                                                       }} >
                                                <View style={{flexDirection:'row'}}>
                                                    <View style={{flexDirection:'column', flex:5}}>
                                                        <View style={{flexDirection:'row'}}>
                                                        <Text style={styles.nameStyle}>{eventList.Event}</Text>
                                                        {eventList.status === "Active" ?
                                                            <Text style={{ fontSize:16, fontWeight:'500', margin:5,flexDirection:'row', color:"#41d900"}}>{eventList.status}</Text>
                                                            :
                                                            eventList.status === "Inactive" ?
                                                            <Text style={{ fontSize:16, fontWeight:'500', margin:5,flexDirection:'row', color:"#ff3b3b"}}>{eventList.status}</Text>
                                                            :
                                                            <Text style={{ fontSize:16, fontWeight:'500', margin:5,flexDirection:'row', color:"#ffd500"}}>{eventList.status}</Text>
                                                        }

                                                        </View>
                                                        <View style={{marginLeft:20,height:50,borderWidth:0.5, backgroundColor:'rgba(220, 220, 220, 0.3)', marginRight:20, marginTop:10,borderRadius:2}}>
                                                            <Text style={styles.sampleMessage}>{eventList.Desc}</Text>
                                                        </View>
                                                        <Text style={{ fontSize:14, color:"#000", textAlign:'center', marginTop:10}}>{eventList.startDate} - {eventList.endDate}</Text>         
                                                    </View>
                                                   
                                                </View>              
                                            </TouchableOpacity> 
                                        </View>)} 
                                </ScrollView>                    
                            </View>

                            <ActionButton
                                    style={{fontSize: 30, }}
                                    elevation={1000}
                                    offsetY={10}
                                    buttonColor="#1A3C6B"
                                    borderColor="#F26725"
                                    borderTopWidth= {0.5}
                                    onPress={() => {this.props.navigation.navigate('CreateEvent')}}
                                    />

                            <Modal
                                popup
                                title={<Text style={{fontWeight:'bold', fontSize:20,}}>{this.state.title}</Text>}
                                animationType="slide-up"
                                onClose={this.onClose}
                                maskClosable
                                visible={this.state.visible}
                                // closable
                                footer={footerButtons}
                                
                                >
                            
                            <View style={{height:'100%'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{ textAlign: "left",marginLeft:20, fontSize:20, fontWeight:'800', marginTop:30 , flex:6}}>Jobstream Weekly meeting</Text>
                                    
                                    {this.state.teststatus === "Active" ?
                                        <Text style={{ textAlign: "center", marginTop:30,flex:2,fontSize:20, fontWeight:'500',  color:"#41d900"}}>{this.state.teststatus}</Text>
                                        :
                                        this.state.teststatus === "Inactive" ? 
                                        <Text style={{ textAlign: "center", marginTop:30,flex:2,fontSize:20, fontWeight:'500',  color:"#ff3b3b"}}>{this.state.teststatus}</Text>
                                        :
                                        <Text style={{ textAlign: "center", marginTop:30,flex:2,fontSize:20, fontWeight:'500',  color:"#ffd500"}}>{this.state.teststatus}</Text>
                                    }
                                </View>
                                <View style={{flexDirection:'row',marginTop:20, borderTopWidth:1, borderTopColor:'#F26725', marginLeft:10, marginRight:10, paddingTop:15}}>
                                    <View style={{flex:3,flexDirection:"column", marginTop:5,marginLeft:10, marginRight:10, }}>
                                        <Text style={{ textAlign: "center", fontSize:18, fontWeight:'500', flex:3,  marginLeft:30, marginRight:30}}>Start Date:</Text>
                                        <Text style={{ textAlign: "center", fontSize:18,  flex:3, borderBottomColor:"gray", borderBottomWidth:1, marginLeft:30, marginRight:30}}>2019/02/02</Text>
                                    </View>

                                    <View style={{flex:3,flexDirection:"column", marginTop:5,marginLeft:10, marginRight:10, }}>
                                        <Text style={{ textAlign: "center", fontSize:18, fontWeight:'500', flex:3 , marginLeft:30, marginRight:30}}>End Date:</Text>
                                        <Text style={{ textAlign: "center", fontSize:18,  flex:3 ,borderBottomColor:"gray", borderBottomWidth:1, marginLeft:30, marginRight:30}}>2019/05/05</Text>
                                    </View>
                                </View>
                                <View style={{marginTop:20,  marginLeft:10, marginRight:10, paddingTop:15}}>
                                    <Text style={{ textAlign: "center", fontSize:18,  flex:1}}>Location:</Text>
                                </View>
                                <Text style={{ textAlign: "left", fontSize:18, fontWeight:'500', marginTop:20 , marginLeft:10}}>Description:</Text>
                                    <ScrollView style={{
                                        maxHeight:250,
                                        backgroundColor:'rgba(220, 220, 220, 0.3)',
                                         borderRadius:8, 
                                         marginTop:20, 
                                         marginBottom:20, 
                                         marginLeft:20, 
                                         marginRight:20, 
                                         borderWidth:0.5, 
                                         borderColor:'#000' , 
                                         padding:20}}>
                                        <TextInput                                
                                            multiline={true} 
                                            editable = {false}  
                                            value={this.state.taskDescription} 
                                            style={{ maxHeight:'100%',maxWidth:'100%', 
                                            flexDirection:'row',
                                            flexGrow:1,
                                            marginLeft:5,
                                            paddingBottom:40,
                                            marginTop:5, 
                                            alignItems:this.multiline=true?"flex-start":"center",
                                            textAlignVertical: 'top',
                                            fontSize:18,
                                        }} />
                                    </ScrollView> 

                                <TouchableOpacity
                                    onPress={() => {this.setState({ visible: false })}}
                                    style={{ 
                                        backgroundColor: '#1A3C6B', 
                                        height:40, 
                                        borderColor:'#F26725', 
                                        borderWidth:1, 
                                        marginLeft:20, 
                                        marginRight:20, 
                                        borderRadius:50, 
                                        marginBottom:30,
                                }} >         
                                    <Text style={{color:'#fff',fontWeight:'500', textAlign:'center', fontSize:20, marginTop:5}}>Close</Text>
                               </TouchableOpacity>  
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
        textAlign:'left',
        flex:5

    },sampleMessage:{
        marginLeft:10, 
        fontSize:18, 
        color:'#000', 
        marginRight:5, 
        textAlign: 'justify',


        marginTop:5
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
        borderRadius: 8,
    }
   });


  