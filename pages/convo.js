import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {Text, 
        View, 
        StyleSheet,
        TextInput,
        Image,
        TouchableOpacity,
        KeyboardAvoidingView, 
        FlatList,
        Keyboard,
        Alert} from 'react-native'
import {getData, storeData} from '../storage/storage_action'; 
import {GET_CONVO_DATA, SEND_MESSAGE} from '../functions/API/conversation'
import AutoHeightImage from 'react-native-auto-height-image';
import {PUSHER} from '../functions/Pusher';
import * as DocumentPicker from 'expo-document-picker';
import { List, SwipeAction } from '@ant-design/react-native';
import Input from '@ant-design/react-native/lib/input-item/Input';

export default class Convo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pusher: null,
            pusher_data: null,
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
            friendImg: this.props.navigation.state.params.friend_img,
            image: null,
            doumentInput:[],
            image:null,
        };


       
    }
    
    componentDidMount(){
        this.extract_LoginData();
        this.get_conversation(this.state.msgId);

        PUSHER().bind('my-event', function(data) {

            console.log(data.data.cId);
            if(data.data.cId == this.state.msgId){

                var data = {
                    sId: data.data.sId,
                    name: data.data.name,
                    message: data.data.message
                }
        
                this.setState({convo : [...this.state.convo, ...[data]]});

            }else{
                //alert(JSON.stringify(data));
            }
            

        
        }.bind(this));
        
    }


     append_msg = async() =>{

        var data = {
            sId: this.state.myId,
            name: this.state.myName,
            message: this.state.myMsg,
            image: this.state.image
        }

        this.setState({convo : [...[data], ...this.state.convo]});
        console.log(this.state.convo);

        SEND_MESSAGE(this.state.msgId, this.state.myId, this.state.myName, this.state.myMsg, this.state.image)
  
        this.textInput.clear()
        var channel = 'my-channel'
        var event = 'my-event'
        var cId = this.state.msgId
        var name = this.state.myName
        var sId = this.state.myId
        var msg = this.state.myMsg
        fetch('https://api.jobstreamapp.io/private_chat/send_msg_app.php?channel='+channel+'&event='+event+'&cid='+cId+'&sid='+sId+'&name='+name+'&msg='+msg);
       
        // this.setState({myMsg : ''})
        
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

            this.setState({convo : prepared_list.reverse()})

            storeData('CHATS', JSON.stringify(prepared_list));
            //return data;

            //console.log(this.state.convo)
        })

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
                                {item.message !== null ? <Text style={{fontSize:15, marginBottom: 10}}>{item.message}</Text> : console.log('No message')}
                                <AutoHeightImage
                                    width={200}
                                    source={{uri:'https://crm.jobstreamapp.io/upload_files/chat/' + item.filename }}
                                 
                                />
                                
                            </View>
                        :
                        item.hasOwnProperty('image') ?
                        <View style={{backgroundColor : 'rgba(84, 160, 255, 0.3)', padding: 15, borderRadius: 15}}>
                                {item.message !== null ? <Text style={{fontSize:15, marginBottom: 10}}>{item.message}</Text> : console.log('No message')}
                                <AutoHeightImage
                                    width={200}
                                    source={{uri:item.image }}
                                 
                                />
                                
                            </View>
                        :

                        <View style={styles.message_holder}>
                            <TextInput multiline={true} editable = {false}  value={item.message}  />
                        </View>
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
                        <View style={{flexDirection:"column", marginRight:5,maxWidth:"80%" }}>
                            <TextInput   
                            
                                    multiline={true} 
                                    editable = {false}  
                                    value={item.message} 
                                    style={styles.friend_message_holder} />
                        </View>           
                    
                    </View>
        )
    }

    doucumentPick = async () => {
        let result = await DocumentPicker.getDocumentAsync({});

       
        console.log(result);
        this.setState({doumentInput: result})
    }

    imagePick = async () => {
        let result = await DocumentPicker.getDocumentAsync({});

        // var data = {
        //     sId: this.state.myId,
        //     name: this.state.myName,
        //     message: this.state.myMsg,
        //     image: result.uri
        // }

        // this.setState({convo : [...[data], ...this.state.convo]});
       
        console.log(result);
        this.setState({image: result.uri})
    }

    filePick=()=>{
        Alert.alert(
            'File',
            'Delete this item?',
            [
                {text: 'cancel', style: 'cancel', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Image',
                onPress: () => this.imagePick(),
               
              },
              {text: 'OK', onPress: () => this.doucumentPick()},
            ],
            {cancelable: false},
          );
    }

    deleteImage=()=>{
        Alert.alert(
            'Warning',
            'Delete this item?',
            [
             
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => this.setState({image:null})},
            ],
            {cancelable: false},
          );
    }

    
    

   
    render() {
        const left = [
            {
              text: 'Read',
              onPress: () => console.log('read'),
              style: { backgroundColor: 'blue', color: 'white' },
            },
            {
              text: 'Reply',
              onPress: () => console.log('reply'),
              style: { backgroundColor: 'green', color: 'white' },
            },
          ];
        let { image, doumentInput } = this.state;
        const messages = this.state.convo;
        return (
            <KeyboardAvoidingView
                behavior={"padding" }
                style={{ flex: 1 }}>
            
            <View style={{flex:1}}>

                    <View style={styles.header}>
                        <View  style={{ marginTop:10, marginLeft:12, flexDirection:'row', paddingBottom:15}}>
                            <TouchableOpacity style={{marginTop:5, marginLeft:5 }}>
                                <AntIcon name="leftcircleo" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} onPress={() => this.props.navigation.goBack()} />   
                            </TouchableOpacity>                     
                            <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1, }}>      
                                <Text style={{fontSize:25, fontWeight:"bold"}}>{this.state.friendName}</Text>
                            </View>
                        </View>
                    </View>
                    

                        <FlatList
                            style={{
                                marginLeft:10,
                                marginRight:10,
                                maxHeight:"83%", minHeight:'83%',marginTop:5, marginBottom:5, transform: [{ scaleY: -1 }]}}
                            data={messages}
                            renderItem = {this.renderRow}
                            keyExtractor={(item, index) => index.toString()}

                        />
                       
                        
        
                       
                        
                
{/* Footer */}
                        <View style={{minHeight:'10%', maxHeight:"10%", backgroundColor: '#fff', borderTopColor: '#ddd', borderTopWidth: 1, }}>
                           
                                <View style={{marginLeft:12, flexDirection:'row', minHeight:"10%"}}>
                                    {/* <FilePicker/> */}

                                    <TouchableOpacity 
                                    onPress={()=> this.filePick() }
                                        style={{ 
                                        marginTop:'-1%',
                                        marginRight:'3%',
                                        alignItems:'center',
                                        justifyContent:'center',
                                                
                                              flex:1}}>
                                        <Icon name="paperclip" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                                    </TouchableOpacity> 

                                    <View style={{
                                        minHeight:'65%',
                                                maxHeight:'65%',
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
                                    {image &&
                                     <TouchableOpacity style={{ flex:1,width:'100%',}}  onPress={()=>this.deleteImage()}>
                                         {/* <TouchableOpacity style={{ flexDirection:"column", position:"absolute",elevation:5, top:5, right:0.5 }}>
                                            <AntIcon name="closecircle" size={15} color="#fff" />   
                                        </TouchableOpacity> */}
                                        <Image source={{ uri: image }} style={{ flex:1,width:'100%', margin:5 , borderRadius:5}}/>
                                    </TouchableOpacity>
                                    }
                                     {doumentInput &&
                                     <TouchableOpacity style={{ flex:1,width:'100%',}}  onPress={()=>this.deleteImage()}>
                                         {/* <TouchableOpacity style={{ flexDirection:"column", position:"absolute",elevation:5, top:5, right:0.5 }}>
                                            <AntIcon name="closecircle" size={15} color="#fff" />   
                                        </TouchableOpacity> */}
                                        <Text value={this.state.doumentInput.uri} style={{ flex:1,width:'100%', margin:5 , borderRadius:5}}/>
                                    </TouchableOpacity>
                                    }
                                    
                                    <TextInput   
                                    placeholder="Type message..."     
                                    multiline={true} 
                                    editable = {true}  
                                    returnKeyType="none"
                                    ref={input => { this.textInput = input }}
                                    onChangeText={(value) => this.setState({ myMsg : value})}
                                    style={{
                                        fontSize:17,
                                        minHeight:'65%',
                                        width:'100%', 
                                        marginLeft:8, 
                                        marginTop:4,
                                        alignItems:this.multiline=true?"flex-start":"center",
                                        flex:3}}
                                />

                                
                                    <TouchableOpacity style={{ marginRight:"1%", flex:1, justifyContent:'center',alignItems:'center'}} onPress = {() => this.append_msg()}>
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
        marginLeft:10,
        marginRight:10,
        marginTop:1,
        marginBottom:3,
        borderRadius: 8,
   
    },
    message:{
        height:70,
        marginLeft:5,
        marginRight:5,
        marginBottom:10,
        marginTop:10,
        alignItems:'center',
        flexDirection:'row-reverse'
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