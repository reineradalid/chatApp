import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5'
import {Text, View, TouchableHighlight, StyleSheet,TextInput,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import {getData} from '../storage/storage_action'; 
import {GET_CONVO_DATA} from '../functions/API/conversation'
import AutoHeightImage from 'react-native-auto-height-image';


export default class Convo extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed'
      };
    constructor(props) {
        super(props);
        this.state = {
            myId: null,
            myName: null,
            myImg: null,
            me:'Max',
            Flexd:'row',
            messageInput:'',
            convo: [{ id : "0" , message : "Loading Messages"}],
            msgId: this.props.navigation.state.params.convo_id,
            friendName: this.props.navigation.state.params.friend_name,
            friendImg: this.props.navigation.state.params.friend_img
        };
       
    }
    

    componentDidMount(){
        this.extract_LoginData();
        this.get_conversation(this.state.msgId);
        console.log(this.props);
    }

    extract_LoginData(){
        var res = getData('LOGIN_DATA');
        res.then(data =>{
            var data_arr = JSON.parse(data)
            
            this.setState({myId : data_arr.oid, myName: data_arr.f_name+' '+data_arr.l_name, myImg: 'https://crm.jobstreamapp.io/assets/user_img/' + data_arr.img, })
        })
    }

    get_conversation(id){
        console.log('ID :', id)
        var msg_list = GET_CONVO_DATA(id)
        var res = msg_list.then(data =>{
            var new_data = JSON.parse(data)
            var prepared_list = [];

            var i = 0;
            new_data.chats.forEach(msg_data => {
                i++;
                msg_data.id = i;
                prepared_list.push(msg_data);
                
            });

            this.setState({convo : prepared_list})
            //return data;

            console.log(this.state.convo)
        })

        
        
    }

   
    render() {
       
        return (
            
            <View style={{flex:1}}>
                    <View style={styles.header}>
    
                        <View  style={{ marginTop:20, marginLeft:12, flexDirection:'row'}}>
                            <TouchableHighlight style={{marginTop:20, marginLeft:5, }} onPress={() => this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                            </TouchableHighlight>                     
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1, }}>      
                                <Text style={{fontSize:25, fontWeight:"bold"}}>{this.state.friendName}</Text>
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
                            <ScrollView style={{maxHeight:"90%", minHeight:'90%',marginTop:5, marginBottom:5 }}>
                            
                            {this.state.convo.map((convos) =>

                            convos.sId === this.state.myId?

                                <View style={{
                                  
                                    marginLeft:5,
                                    marginRight:5,
                                    marginBottom:5,
                                    marginTop:5, 
                                    flexDirection:'row-reverse' , 
                                    alignItems:'center'
                                }}key={convos.id}>       
                                    <Image source={{uri: this.state.myImg}} style={styles.imageStyle}  />
                                    <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%", }}>

                                        {convos.hasOwnProperty('filename') ?
                                            <View style={{backgroundColor : 'rgba(84, 160, 255, 0.3)', padding: 15, borderRadius: 15}}>
                                                {convos.message !== '' ? <Text style={{fontSize:15, marginBottom: 10}}>{convos.message}</Text> : <Text></Text>}
                                                <AutoHeightImage
                                                    width={200}
                                                    source={{uri: 'https://crm.jobstreamapp.io/upload_files/chat/' + convos.filename}}
                                                />
                                                
                                            </View>
                                        :
                                        
                                            <TextInput multiline={true} editable = {false}  value={convos.message} style={styles.message_holder} />
                                        }
                                        

                                              
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
                                    <Image source={{uri: this.state.friendImg}} style={styles.imageStyle}  />
                                    <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%", }}>

                                        {convos.hasOwnProperty('filename') ?
                                            <View style={{backgroundColor : 'rgba(84, 160, 255, 0.3)', padding: 15, borderRadius: 15}}>
                                                {convos.message !== '' ? <Text style={{fontSize:15, marginBottom: 10}}>{convos.message}</Text> : <Text></Text>}
                                                <AutoHeightImage
                                                    width={200}
                                                    source={{uri: 'https://crm.jobstreamapp.io/upload_files/chat/' + convos.filename}}
                                                />
                                                
                                            </View>
                                        :
                                        
                                            <TextInput multiline={true} editable = {false}  value={convos.message} style={styles.friend_message_holder} />
                                        }

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
                                            placeholder="Type message .. "
                                            style={{flex:1, 
                                                    width:'100%', 
                                                    marginLeft:5, 
                                                    marginRight:5,
                                                    alignItems:this.multiline=true?"flex-start":"center"}}
  
  
/>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </View>
             
                              
            </View>
           
            
        );
    }
}



const styles = StyleSheet.create({
    nameStyle:{marginLeft:20, fontSize:15, fontWeight:'bold'

    },sampleMessage:{
        marginLeft:10, fontSize:18, color:'#000', marginRight:10, textAlign: 'justify'
    },
    imageStyle:{
        width: 40, height: 40, borderRadius:50,
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
        height:'8%'
        
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

    },
        message_holder:{ maxHeight: "100%", 
        flexDirection:'row',
        flexGrow:1,
        marginRight:10,
        marginTop:10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom : 3,
        borderRadius:12,
        alignItems:this.multiline=true?"flex-start":"center",
        backgroundColor : 'rgba(84, 160, 255, 0.3)',
        textAlignVertical: 'top',
        // lineHeight: 23,
        flex: 2,
        fontSize:15,
    },
    friend_message_holder:{ 
        maxHeight: "100%", 
        flexDirection:'row',
        flexGrow:1,
        backgroundColor:'rgba(200, 214, 229, 0.3)', 
        marginLeft:10,
        marginTop:10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom : 3,
        borderRadius:12,
        alignItems:this.multiline=true?"flex-start":"center",
        textAlignVertical: 'top',
        // lineHeight: 23,
        flex: 2,
        fontSize:15,
    }




   });