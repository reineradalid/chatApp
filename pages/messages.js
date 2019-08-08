import React from 'react';
import { Button, Text, View, StyleSheet ,TextInput,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Convo from './convo';
import {GET_MESSAGE_LIST} from '../functions/API/conversation';
import {GET_USER_DATA} from '../functions/API/user';
import {async_storage} from '../storage/init';
import {getData} from '../storage/storage_action';


export default class Messages extends React.Component{
    static navigationOptions = {
        title: 'Messages',
        
      };


    render(){
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
        mydata : null,
        myname : 'null',
        message:[
            {
                id:'1',
                name:'Max',
                preview:'sample message',
                profile_img : ''
            }
        ]
      }
  }

  componentDidMount(){
    var login_data = getData('LOGIN_DATA');
    login_data.then(data => {

      var new_data = JSON.parse(data);
      this.setState({myname : new_data.f_name +' '+ new_data.l_name })

      var msg_list = GET_MESSAGE_LIST(new_data.oid) // GET LIST
      
      var prepared_list = []; // SET THIS TO STATE
      msg_list.then(data =>{
          


          var msg_list_arr = JSON.parse(data);

          msg_list_arr.forEach(msg_data => {

            //REMOVE MY ID FROM MEMBERS ARRAY

            msg_data.members.forEach(mem_data =>{

              if(mem_data !== new_data.oid){

                // GET FRIEND DATA
                  var friend_data = GET_USER_DATA(mem_data);
                  friend_data.then(fdata =>{

                    var new_fdata = JSON.parse(fdata);

                    const list_obj = { // PUSH THIS TO PREPARED LIST
                      id: msg_data.objectId,
                      name: new_fdata.firstname + ' ' + new_fdata.lastname,
                      preview:'sample message',
                      profile_img : new_fdata.user_img
                    }
                    prepared_list.push(list_obj)
                   
                    this.setState({message : prepared_list})
        
                  })
              }

            })

            

            

            // console.log('MEMBERS ', index)

          });
      })

    })
    
    
  }

   
    render(){
        //console.log(this.state.message);
        const {navigate} = this.props.navigation;
   
          return (
              <View style={{flex:1}}>
                    <View style={styles.header}>
    
                        <View  style={{ marginTop:20, marginLeft:12, flexDirection:'row', height:60}}>
                            <TouchableOpacity style={{marginTop:20, marginLeft:5, flex:3}}>
                                <Icon name="bars" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                            </TouchableOpacity>                     
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' ,flex:2, marginRight:10,marginTop:5}}>      
                                <Text style={{fontSize:25, textAlign:'center', fontWeight:"bold"}}>{this.state.myname}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.searchBarStyle}>
                            
                            <TextInput
                            placeholder="Search"
                            style={{ flex:1, width:'100%', marginLeft:10, marginRight:10}}
                            />
                        </TouchableOpacity>
                    </View>
        
                    <View style={styles.body} >
                            {this.state.message.map((messageList) =>
                            <View key={messageList.id}>
                                            
                                <TouchableOpacity style={styles.message} onPress={() => navigate('Convo')}>
                                        <Image source={{uri: 'https://crm.jobstreamapp.io/assets/user_img/' + messageList.profile_img}} style={styles.imageStyle}  />
                                        <View style={{flexDirection:"column"}}>
                                            <Text style={styles.nameStyle}>{messageList.name}</Text>
                                            <Text style={styles.sampleMessage}>{messageList.preview}</Text>
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
   

