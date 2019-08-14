import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Text, View, TouchableHighlight, StyleSheet,TextInput,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { ScrollView,  } from 'react-native-gesture-handler';



export default class MessageFooter extends Component {
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" enabled>
            <View style={{flex:1}} >

                 <View style={{height:70,}}>
  
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
                                            alignItems:this.multiline=true?"flex-start":"center"
                                }}/>
                            </TouchableOpacity>
                        </View>

                 </View>
                
               

            </View>
            </KeyboardAvoidingView>
            // <KeyboardAvoidingView  style={{ flex: 1,justifyContent: 'center', alignItems: 'center',}} behavior="padding" enabled>
            // <View style={{flex:1}}>
            //     <View style={{marginTop:-35,height:80, backgroundColor: '#fff'}}>
                    
                       
                   
            //     </View>           
            // </View>
            // </KeyboardAvoidingView>
           
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    
    
    },
    inputBox: {
      width: 250,
      borderRadius:10,
      paddingHorizontal:16,
      fontSize:16,
      color:'#fff',
      marginVertical:10,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderColor:'#F26725',
      paddingVertical:10,
      position:'relative'
    },
    ButtonStyle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center'
    },Button:{
        width: 220,
        borderRadius:25,
        paddingVertical:12,
        fontSize:16,
        marginVertical:10,
        backgroundColor:'rgba(26, 60, 107, 0.4)',
        borderColor:'#F26725',
        borderWidth: 1,
        position:'relative'

    }
  });
  
