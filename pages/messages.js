import React from 'react';
import {Text, View, StyleSheet ,TextInput,Image,StatusBar} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Convo from './convo';
import {GET_MESSAGE_LIST} from '../functions/API/conversation';
import {GET_USER_DATA} from '../functions/API/user';
import {getData} from '../storage/storage_action';

export default class Messages extends React.Component{
  static navigationOptions = {
    title: 'Messages',
    drawerIcon: ({ focused }) => (
      <Icon name="envelope" size={24} color={focused ? '#F26725' : 'black'} />
    ),
  };

  render(){
        return (
            <View style={{flex:1}}>
               <Messagecontainer/>
            </View>
          );
    }  
}

class MessageTrends extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        mydata :'',
        myname :'',
        message:[]
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

                    var chats = msg_data.chats;

                    // GETTING LAST MESSAGE
                      var get_last_message = chats[chats.length-1];
                      var last_message = null;
                      if(get_last_message !== undefined){

                        last_message = get_last_message.message;

                        if(get_last_message.filename !== undefined){

                          last_message = 'Sent an attachment'
                        }

                      }else{
                        last_message = 'No conversation yet..'
                      }
                    // GETTING LAST MESSAGE END


                    const list_obj = { // PUSH THIS TO PREPARED LIST
                      id: msg_data.objectId,
                      name: new_fdata.firstname + ' ' + new_fdata.lastname,
                      preview:  last_message,
                      profile_img : new_fdata.user_img
                    }

                    prepared_list.push(list_obj)
                   
                    this.setState({message : prepared_list})
        
                  })
              }

            })



          });
      })

    })
    
    
  }

   
    render(){
        //console.log(this.state.message);
        const {navigate} = this.props.navigation;
   
          return (
              <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                    <View style={styles.header}>
    
                        <View  style={{ marginTop:20, marginLeft:12, flexDirection:'row', height:60}}>
                          
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' ,flex:2, marginRight:10,marginTop:5}}>      
                                <Text style={{fontSize:22, textAlign:'center', fontWeight:"bold", color: '#fff'}}>Conversations</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.searchBarStyle}>
                            
                            <TextInput
                            placeholder="Search"
                            style={{ flex:1, width:'100%', marginLeft:10, marginRight:10}}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{marginTop: 35}}>
                    <View style={styles.body} >
                            
                              {this.state.message.map((messageList) =>
                              <View key={messageList.id}>
                                              
                                  <TouchableOpacity style={styles.message} onPress={() => {navigate('Convo', {"convo_id":messageList.id, "friend_name":messageList.name, "friend_img": 'https://crm.jobstreamapp.io/assets/user_img/' + messageList.profile_img})}}>
                                          <Image source={{uri: 'https://crm.jobstreamapp.io/assets/user_img/' + messageList.profile_img}} style={styles.imageStyle}  />
                                          <View style={{flexDirection:"column"}}>
                                              <Text style={styles.nameStyle}>{messageList.name}</Text>
                                              <Text style={styles.sampleMessage}>{messageList.preview}</Text>
                                          </View>
                                  </TouchableOpacity>
                              </View>)} 
                            
                    </View>
                    </ScrollView>
        
        
              </View>
            );
      }  

}


const stackNavigation = createStackNavigator({
    MessageTrends: {
       screen: MessageTrends,
     },
     Convo: {
       screen: Convo,
     },
      
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
    nameStyle:{
      marginLeft:20, 
      fontSize:20, 
      fontWeight:'bold',
      color: '#1A3C6B'

    },sampleMessage:{
        marginLeft:20, 
        fontSize:16, 
        color:'#A9A9A9'
    },
    imageStyle:{
        width: 45, 
        height: 45, 
        borderRadius:50,
    },
    searchBarStyle:{
        flexDirection:"row",
        height: 40, 
        borderColor:'#000',
        borderWidth: 0.3,
        backgroundColor:'rgba(255,255,255, 1)',
        borderRadius: 5,
        marginRight:10, 
        marginLeft: 10,
        marginTop: 15, 
        alignItems:"center",
    },
    header:{
        height: 70, 
        backgroundColor: '#F26725', 
        justifyContent: "center", 
        alignContent: "center"
    },
    body:{
        height: 630, 
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        borderRadius: 8,
   
    },
    message:{
        height:70,
        marginLeft:5,
        marginRight:5,
        marginBottom:3,
        marginTop:2,
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
   

