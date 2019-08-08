import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome'
import {Text, View, TouchableHighlight, StyleSheet,TextInput,Image} from 'react-native'

export default class Convo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convo:[
                {
                    id:'1',
                    name:'Max',
                    messageSample:'sample message'
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
                    messageSample:'sample message'
                },
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
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>      
                                <Text style={{fontSize:25, fontWeight:"bold"}}>Messages</Text>
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

                  


                           
                    </View>
        
        
              </View>
            
        );
    }
}



const styles = StyleSheet.create({
    nameStyle:{marginLeft:20, fontSize:20, fontWeight:'bold'

    },sampleMessage:{
        marginLeft:20, fontSize:16, color:'#A9A9A9'
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
        height: 80, 
        backgroundColor: '#fff', 
        justifyContent: "center", 
        alignContent: "center"
    },
    body:{
        height: 630, 
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
        
        flexDirection: "row", 
     alignItems:'center'
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