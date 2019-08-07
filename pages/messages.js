import React from 'react';
import { Button, Text, View, StyleSheet ,TextInput,Image} from 'react-native';
import { connect } from 'react-redux';
import {isLoggedIn, isLoggedOut} from '../Action';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Messages extends React.Component{
    static navigationOptions = {
        title: 'Messages',
        
      };

  constructor(props){
    super(props);
      this.state = {
        login_status : false
      }
  }

    render(){
      console.log(this.props);
        return (
            <View style={{flex:1}}>
                <View style={styles.header}>

                     {/* <View  style={{justifyContent:'center', marginTop:20, marginLeft:12, flexDirection:'column'}}>
                        <View style={{position: 'absolute', left:0, top:2}}>
                        <Icon name="chevron-left" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                        </View>                     
                        <View style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>      
                            <Text style={{fontSize:20, fontWeight:"bold"}}>Messages</Text>
                        </View>
                    </View> */}
                    <TouchableOpacity style={styles.searchBarStyle}>
                      
                        <TextInput
                        placeholder="Search"
                        style={{ flex:1, width:'100%'}}
                        />
                    </TouchableOpacity>
                </View>
      
            <View style={styles.body} >

                <TouchableOpacity style={styles.message}>
                        <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.nameStyle}>Joy-Anne</Text>
                            <Text style={styles.sampleMessage}>Sample message</Text>
                        </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.message}>
                        <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.nameStyle}>Joy-Anne</Text>
                            <Text style={styles.sampleMessage}>Sample message</Text>
                        </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.message}>
                        <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.nameStyle}>Joy-Anne</Text>
                            <Text style={styles.sampleMessage}>Sample message</Text>
                        </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.message}>
                        <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.nameStyle}>Joy-Anne</Text>
                            <Text style={styles.sampleMessage}>Sample message</Text>
                        </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.message}>
                        <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.nameStyle}>Joy-Anne</Text>
                            <Text style={styles.sampleMessage}>Sample message</Text>
                        </View>

                </TouchableOpacity>
            
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
        marginTop:5,
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
   

