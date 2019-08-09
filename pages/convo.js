import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5'
import {Text, View, TouchableHighlight, StyleSheet,TextInput,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { ScrollView,  } from 'react-native-gesture-handler';



export default class Convo extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed'
      };
    constructor(props) {
        super(props);
        this.state = {
            me:'Max',
            Flexd:'row',
            messageInput:'',
            convo:[
                {
                    id:'1',
                    name:'Max',
                    messageSample:'sample message asdascxasdasdijasdjhasdd asoi duyasd aousiyhpoaj sdiuashd aiusy do08'
                },
                {
                    id:'2',
                    name:'Tomas',
                    messageSample:'sample message'
                },
                {
                    id:'3',
                    name:'Max',
                    messageSample:'sample message'
                },
                {
                    id:'4',
                    name:'Tomas',
                    messageSample:'sample messageasd asdasd asda asdacasca ascasdasdascasd'
                },
                {
                    id:'5',
                    name:'Tomas',
                    messageSample:'sample messageasd asdasd asda asdacasca ascasdasdascasd'
                }
            ]
        };
    }

   
    render() {
       
        return (
            
            <View style={{flex:1}}>
                    <View style={styles.header}>
    
                        <View  style={{ marginTop:20, marginLeft:12, flexDirection:'row', height:60}}>
                            <TouchableHighlight style={{marginTop:20, marginLeft:5, }}>
                                <Icon name="chevron-left" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                            </TouchableHighlight>                     
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1, }}>      
                                <Text mul style={{fontSize:25, fontWeight:"bold"}}>Name props</Text>
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
                            <ScrollView style={{maxHeight:"93%", minHeight:'93%',marginTop:5, marginBottom:5 }}>
                            
                            {this.state.convo.map((convos) =>

                            convos.name === this.state.me?
                           

                         
                                
                                
                                <View style={{
                                  
                                    marginLeft:5,
                                    marginRight:5,
                                    marginBottom:5,
                                    marginTop:5, 
                                    flexDirection:'row-reverse' , 
                                    alignItems:'center'
                                }}key={convos.id}>       
                                    <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                                    <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%", }}>
                                        <TextInput   
                                        
                                                multiline={true} 
                                                editable = {false}  
                                                value={convos.messageSample} 
                                                style={{ maxHeight: "100%", 
                                                flexDirection:'row',
                                                flexGrow:1,
                                                backgroundColor: 'rgba(38, 172, 255, 0.3)', 
                                                marginLeft:10,
                                               padding:10,
                                                marginTop:10,
                                                borderRadius:8,
                                                alignItems:this.multiline=true?"flex-start":"center",
                                                textAlignVertical: 'top',
                                                // lineHeight: 23,
                                                flex: 2,
                                                fontSize:18,
                                              }} />
                                    </View>                              
                                </View>
                               
                                :
                               
                                <View style={{
                                   
                                    marginLeft:5,
                                    marginRight:5,
                                    marginBottom:5,
                                    marginTop:5, 
                                    flexDirection:'row' , 
                                    alignItems:'center'
                                }}
                                key={convos.id}>       
                                    <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                                    <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%", }}>
                                        <TextInput   
                                        
                                                multiline={true} 
                                                editable = {false}  
                                                value={convos.messageSample} 
                                                style={{ maxHeight: "100%", 
                                                flexDirection:'row',
                                                flexGrow:1,
                                                backgroundColor:'rgba(220, 220, 220, 0.3)', 
                                                marginLeft:10,
                                               padding:10,
                                                marginTop:10,
                                                borderRadius:8,
                                                alignItems:this.multiline=true?"flex-start":"center",
                                                textAlignVertical: 'top',
                                                // lineHeight: 23,
                                                flex: 2,
                                                fontSize:18,
                                              }} />
                                    </View>           
                                   
                                </View>
                        )} 

                        </ScrollView>
                       
                                    
                           
                    </View>

                
{/* Footer */}
                        <View style={{marginTop:-35,height:'10%', backgroundColor: '#fff'}}>
                            <KeyboardAvoidingView behavior="padding" enabled>
                                <View  style={{ marginLeft:12, flexDirection:'row', position:'relative'}}>
                                    <TouchableOpacity style={{ marginLeft:5, flex:1}}>
                                        <Icon name="paperclip" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                                    </TouchableOpacity> 

                                    <TouchableOpacity style={{flex:6}}>
                                        <TextInput
                                            multiline={true} 
                                            returnKeyType = { "next" }
                                            placeholder="Search"
                                            style={{flex:1, 
                                                    width:'100%', 
                                                    marginLeft:5, 
                                                    marginRight:5,
                                                    alignItems:this.multiline=true?"flex-start":"center"}}/>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </View>
             
                              
            </View>
           
            
        );
    }
}



const styles = StyleSheet.create({
    nameStyle:{marginLeft:20, fontSize:20, fontWeight:'bold'

    },sampleMessage:{
        marginLeft:10, fontSize:18, color:'#000', marginRight:10, textAlign: 'justify'
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
        height: 30
        
        , 
        backgroundColor: '#fff', 
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