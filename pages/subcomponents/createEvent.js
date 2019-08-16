import React from 'react'
import {View, 
        Text , 
        StyleSheet, 
        KeyboardAvoidingView, 
        TextInput,
        ScrollView 
    } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign'
import {ADD_EVENTS} from '../../functions/API/eventsApi'
import Icons from 'react-native-vector-icons/FontAwesome'
import {
    Button,
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
    Icon,
  } from '@ant-design/react-native';



export default class CreateEvent extends React.Component{
    constructor(props){
        super(props)
        this.onClose = () => {
            this.setState({
              visible: false,
            });
          };
         
       
        this.state = {
            startDate:"",
            endDate:'',
            priorityLevel:'Low',
            selectedItems :[],
            newEventTitle:'',
            newEventDescription:'',
            location:'',
            newEvent:[],
            visible: false
        }
    }
    saveEvent=()=>{
       
        this.setState(prevState => ({
            newEvent: [...prevState.newEvent, 
                {
                    "taskTitle": this.state.newEventTitle, 
                    "taskDescription" :this.state.newEventDescription, 
                    "startDate":this.state.startDate,
                    "endDate":this.state.endDate,
                    "location":this.state.location
                }]
          }))

        ADD_EVENTS(this.state.newEventTitle, this.state.newEventDescription, this.state.startDate, this.state.endDate,this.state.location )
    }





    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      }
    render(){
        const footerButtons = [
            { text: 'Confirm', onPress: () =>this.saveEvent() },
            { text: 'Cancel', onPress: () => this.setState({visible:false}) },
           
          ];

        return(
            <Provider>
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <View  style={{ marginTop:5, marginLeft:12, flexDirection:'row'}}>
                        <TouchableOpacity style={{marginLeft:5, marginTop:5}} onPress={()=> {this.props.navigation.goBack()}}>
                            <AntIcon name="leftcircleo" style={{fontSize:30, color:'#fff', }}/>
                        </TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>      
                            <Text style={{fontSize:25, fontWeight:"bold", color:'#fff'}}>Create Events</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.body}>
                    <KeyboardAvoidingView>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:18, fontWeight:'500',marginTop:10, marginLeft:5,flex:1}}>Title: </Text>
                                <View style={{marginTop:5, marginRight:10,borderColor:'gray', borderWidth:0.5, borderRadius:8,flex:6,height:40,}}>
                                    <TextInput   
                                        placeholder="Enter title"     
                                        multiline={true} 
                                        editable = {true}  
                                        onChangeText={(value) => this.setState({ newEventTitle : value})}
                                        style={{ marginLeft:5, color:'#000', fontSize:18,marginTop:5 ,
                                    }} />
                                </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:18, fontWeight:'500',marginTop:20, marginLeft:5,flex:2}}>Location: </Text>
                                <View style={{marginTop:10, marginRight:10, flex:5,borderColor:'gray', borderWidth:0.5, borderRadius:8,height:40,}}>
                                    <TextInput   
                                            placeholder="Enter Location"     
                                            multiline={true} 
                                            editable = {true}  
                                            onChangeText={(value) => this.setState({ location : value})}
                                            style={{ marginLeft:5, color:'#000', fontSize:18,marginTop:5 ,
                                        }} />
                                </View>
                        </View>
                        <View style={{height:300, marginTop:10, borderTopColor:'#F26725', borderTopWidth:0.5, marginLeft:5, marginRight:5}}>
                            <Text style={{ textAlign: "left", fontSize:18, fontWeight:'500', marginTop:10 }}>Description:</Text>
                                <ScrollView style={{maxHeight:250,backgroundColor:'rgba(220, 220, 220, 0.3)', borderRadius:8, marginTop:20 , borderWidth:0.5, borderColor:'#000', padding:10}}>
                                    <TextInput      
                                        multiline={true} 
                                        editable = {true}  
                                        onChangeText={(value) => this.setState({ newEventDescription : value})}
                                        style={{ height:'100%', 
                                        flexDirection:'row',
                                        flexGrow:1,
                                        marginLeft:5,
                                        padding:10,
                                        marginTop:10, 
                                        alignItems:this.multiline=true?"flex-start":"center",
                                        textAlignVertical: 'top',
                                        flex: 1,
                                        fontSize:18,
                                    }} />
                                </ScrollView>
                        </View>
                            <View style={{ marginTop:10, marginBottom:10,  borderBottomColor:'#F26725', borderBottomWidth:0.5, marginLeft:5, marginRight:5, paddingBottom:10}}>
                                <Text style={{ textAlign: "left", fontSize:18, fontWeight:'500', marginTop:10 }}>Select Date:</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:10}}>
                                <DatePicker
                                    style={{flex:3, marginLeft:10, marginRight:10, borderRadius:8}}
                                    date={this.state.startDate}
                                    mode="date"
                                    placeholder="start date"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2022-01-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    }}
                                    onDateChange={(date) => {this.setState({startDate: date})}}
                                />
                                <DatePicker
                                        style={{ flex:3, marginLeft:10, marginRight:10}}
                                        date={this.state.endDate}
                                        mode="date"
                                        placeholder="end date"
                                        format="YYYY-MM-DD"
                                        minDate="2016-05-01"
                                        maxDate="2022-01-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        }}
                                        onDateChange={(date) => {this.setState({endDate: date}) }}
                                    />
                            </View>
                            <TouchableOpacity
                                onPress={()=> {this.setState({visible:true})}}
                                style={{ 
                                    marginRight:10, 
                                    marginLeft:10,
                                    borderRadius:50, 
                                    marginTop:30, 
                                    backgroundColor: '#1A3C6B', 
                                    height:40, 
                                    borderColor:'#F26725', 
                                    borderWidth:1}}>
                                <Text style={{textAlign:'center', color:'#fff', fontSize:20, marginTop:3}}>Save</Text>
                            </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>


                <Modal
                        title={this.state.title}
                        transparent
                        onClose={this.onClose}
                        maskClosable
                        visible={this.state.visible}
                        // closable
                        footer={footerButtons}
                        style={{width:"98%",  marginLeft:10, marginRight:10}}
                        >
                        <View style={{ paddingVertical: 30 }}>
                            <Icons name="warning" color="#F26725" fontWeight={300} size={40} style={{alignSelf:'center'}}/>
                            <Text style={{ textAlign: 'center', fontSize:20, fontWeight:'500', marginTop:10 }}>Do you want to save this event?</Text>
                        </View>
                        
                    </Modal>
            </View>
            </Provider>
        )
    }
}



const styles = StyleSheet.create({
    header:{
        height: 70, 
        marginBottom:5,
        backgroundColor: '#F26725', 
        justifyContent: "center", 
        alignContent: "center",
       
    },
    body:{  
        marginLeft:10,
        marginRight:10,
        marginTop:20
      
    },
   });

