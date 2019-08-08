import React from 'react';
import { Button, Text, View, StyleSheet ,TextInput,Image} from 'react-native';
import { connect } from 'react-redux';
import {isLoggedIn, isLoggedOut} from '../Action';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import Form from './subcomponents/Form'
import { DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Convo from './convo'



export default class Messages extends React.Component{
    static navigationOptions = {
        title: 'Messages',
        
      };
    
     


    render(){
      console.log(this.props.navigation);
      
        return (
            <View style={{flex:1}}>
               <Messagecontainer/>
            </View>
          );
    }  
}
export  class MessageTrends extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        message:[
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
                name:'Philip',
                messageSample:'sample message'
            },
            {
                id:'4',
                name:'Test',
                messageSample:'sample message'
            },
        ]
      }
  }

   
    render(){
        console.log(this.state.message);
        const {navigate} = this.props.navigation;
   
          return (
              <View style={{flex:1}}>
                    <View style={styles.header}>
    
                        <View  style={{ marginTop:20, marginLeft:12, flexDirection:'row', height:60}}>
                            <TouchableOpacity style={{marginTop:20, marginLeft:5, flex:3}}>
                                <Icon name="bars" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                            </TouchableOpacity>                     
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' ,flex:2, marginRight:10,marginTop:5}}>      
                                <Text style={{fontSize:25, textAlign:'center', fontWeight:"bold"}}>Messages</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.searchBarStyle}>
                            
                            <TextInput
                            placeholder="Search"
                            style={{ flex:1, width:'100%'}}
                            />
                        </TouchableOpacity>
                    </View>
        
                    <View style={styles.body} >
                            {this.state.message.map((messageList) =>
                            <View key={messageList.id}>
                                            
                                <TouchableOpacity style={styles.message} onPress={() => navigate('Convo')}>
                                        <Image source={{uri: 'https://i.ytimg.com/vi/IDfsOrqmzq8/maxresdefault.jpg'}} style={styles.imageStyle}  />
                                        <View style={{flexDirection:"column"}}>
                                            <Text style={styles.nameStyle}>{messageList.name}</Text>
                                            <Text style={styles.sampleMessage}>{messageList.messageSample}</Text>
                                        </View>
                
                                </TouchableOpacity>
                            </View>)} 
                    </View>
        
        
              </View>
            );
      }  

}


const stackNavigation = createStackNavigator({
    MessageTrends: {
       screen: MessageTrends,
       navigationOptions: () => ({
         title: `MessageTrends`,
         headerBackTitle: null
       }),
       
     },
     Convo: {
       screen: Convo,
     },
      navigationOptions: () => ({
       title: `Convo`,
       headerBackTitle: null
     }),
   },
   {
     headerMode: 'none',
     navigationOptions: {
       headerVisible: false,
     }
    }
   );
   
   const Messagecontainer = createAppContainer(stackNavigation)
   


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
   

