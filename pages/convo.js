import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableHighlight, StyleSheet,TextInput,Image,TouchableOpacity,KeyboardAvoidingView, FlatList} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import {getData} from '../storage/storage_action'; 
import {GET_CONVO_DATA, SEND_MESSAGE} from '../functions/API/conversation'
import AutoHeightImage from 'react-native-auto-height-image';
import Pusher from 'pusher-js/react-native';


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
            myMsg: '',
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
        this.get_conversation(this.state.msgId)

        Pusher.logToConsole = true;

        var pusher = new Pusher('c35a3f466eb98e23c0e7', {
        cluster: 'ap1',
        forceTLS: true
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
        alert(JSON.stringify(data));
        });
        
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

            //console.log(this.state.convo)
        })

    }

    pusher = () =>{




    }


    renderRow =({item}) =>{
        return(

                item.sId === this.state.myId?

                <View style={{
                        marginLeft:5,
                        marginRight:5,
                        marginBottom:5,
                        marginTop:5, 
                        flexDirection:'row-reverse' , 
                        alignItems:'center',
                        transform: [{ scaleY: -1 }]
                    }}key={item.id}>       
                    <Image source={{uri: this.state.myImg}} style={styles.imageStyle}  />
                    <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%", }}>

                        {item.hasOwnProperty('filename') ?
                            <View style={{backgroundColor : 'rgba(84, 160, 255, 0.3)', padding: 15, borderRadius: 15}}>
                                {item.message !== '' ? <Text style={{fontSize:15, marginBottom: 10}}>{item.message}</Text> : <Text></Text>}
                                <AutoHeightImage
                                    width={200}
                                    source={{uri: 'https://crm.jobstreamapp.io/upload_files/chat/' + item.filename}}
                                />
                                
                            </View>
                        :
                        
                            <TextInput multiline={true} editable = {false}  value={item.message} style={styles.message_holder} />
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
                            alignItems:'center',
                            transform: [{ scaleY: -1 }]
                        }}
                        key={item.id}>

                        <Image source={{uri: this.state.friendImg}} style={styles.imageStyle}  />
                        <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%", }}>
                            <TextInput   
                            
                                    multiline={true} 
                                    editable = {false}  
                                    value={item.message} 
                                    style={styles.friend_message_holder} />
                        </View>           
                    
                    </View>
        )
    }

   
    render() {
        return (
            <KeyboardAvoidingView
                behavior={"padding" }
                style={{ flex: 1 }}>
            
            <View style={{flex:1}}>

                    <View style={styles.header}>
                        <View  style={{ marginTop:10, marginLeft:12, flexDirection:'row', paddingBottom: 15}}>
                            <TouchableOpacity style={{marginTop:5, marginLeft:5, }}>
                                <AntIcon name="leftcircleo" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} onPress={() => this.props.navigation.goBack()} />   
                            </TouchableOpacity>                     
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1, }}>      
                                <Text style={{fontSize:25, fontWeight:"bold"}}>{this.state.friendName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body} >

                        <FlatList
                            style={{maxHeight:"87%", minHeight:'85%',marginTop:5, marginBottom:5, transform: [{ scaleY: -1 }]}}
                            data={this.state.convo.reverse()}
                            renderItem = {this.renderRow}
                            keyExtractor={(item, index) => index.toString()}

                        >

                        </FlatList>
                    </View>
                        
        
                       
                        
                
{/* Footer */}
                        <View style={{marginTop:-23,minHeight:'12%', maxHeight:"13%", backgroundColor: '#fff', borderTopColor: '#ddd', borderTopWidth: 1 }}>
                           
                                <View style={{marginLeft:12, flexDirection:'row', minHeight:"10%", marginTop:"0.5%"}}>

                                    <TouchableOpacity style={{ 
                                        marginTop:'-2%',
                                         marginRight:'3%',
                                        alignItems:'center',
                                        justifyContent:'center',
                                                
                                              flex:1}}>
                                        <Icon name="paperclip" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                                    </TouchableOpacity> 

                                    <View style={{
                                        minHeight:'60%',
                                                maxHeight:'60%',
                                                zIndex:5,
                                                flexDirection: 'row',
                                                flex:7,
                                                borderColor:'gray',
                                                borderWidth:0.2,
                                                borderRadius:8,
                                                marginBottom:"5%",
                                                marginTop:'1%',
                                                marginLeft:'-2%',
                                                marginRight:'3%',
                                                marginBottom:'3%'}}>
                                        <TextInput
                                       
                                            multiline={true} 
                                            returnKeyType = { "next" }
                                            placeholder="Type message .. "
                                            onChange = {(value) => this.setState({myMsg : value.nativeEvent.text})}
                                            style={{
                                                    fontSize:17,
                                                    minHeight:'60%',
                                                    width:'100%', 
                                                    marginLeft:8, 
                                                    marginTop:4,
                                                    alignItems:this.multiline=true?"flex-start":"center",
                                                    flex:6,
                                        }} />

                                    <TouchableOpacity style={{ marginRight:"1%", flex:1, justifyContent:'center',alignItems:'center'}} onPress = {() => SEND_MESSAGE(this.state.msgId, this.state.myId, this.state.myName, this.state.myMsg)}>
                                        <FontIcon name="paper-plane-o" size={25} color="#F26725" style={{textAlign:'center', flexDirection:'column'}} />   
                                    </TouchableOpacity>
                                    </View>

                                </View>
                                
                           
                        </View>
             
                              
            </View>
            </KeyboardAvoidingView>
           
            
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
        height:'7%', 
        backgroundColor: '#fff', 
        justifyContent: "center", 
        alignContent: "center",
        borderBottomWidth : 1, 
        borderBottomColor : '#ddd'
       
    },
    body:{
        
         
        // backgroundColor: '#c6e2ff', 
        marginLeft:10,
        marginRight:10,
        marginTop:1,
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