import React from 'react'
import {View, 
        Text , 
        StyleSheet, 
        KeyboardAvoidingView, 
        TextInput,
        Picker,
        ScrollView 
    } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import DatePicker from 'react-native-datepicker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign'


const items = [
    {
    id: '1',
    name: 'Lagos',
  },  {
    id: '2',
    name: 'Kaduna',
  }, {
    id: '3',
    name: 'Abuja',
  }];

export default class CreateTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate:"",
            endDate:'',
            priorityLevel:'Low',
            selectedItems :[],
            newTasktitle:'',
            newTaskDescription:'Enter ',
            newtask:[]
        }
    }
    test=()=>{
        this.setState(prevState => ({
            newtask: [...prevState.newtask, 
                {
                    "taskTitle": this.state.newTasktitle, 
                    "taskDescription" :this.state.newTaskDescription, 
                    "startDate":this.state.startDate,
                    "endDate":this.state.endDate,
                    "assignee": this.state.selectedItems,
                    "priorityLevel":this.state.priorityLevel
                }]
          }))
    }


    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      }
    render(){
        const { selectedItems } = this.state;
        return(
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <View  style={{ marginTop:5, marginLeft:12, flexDirection:'row'}}>
                        <TouchableOpacity style={{marginLeft:5, marginTop:5}} onPress={()=> {this.props.navigation.goBack()}}>
                            <AntIcon name="leftcircleo" style={{fontSize:30, color:'#fff', }}/>
                        </TouchableOpacity>
                        <View style={{alignItems:'center', justifyContent:'center',flexDirection:'column' , marginRight:10,marginTop:5, flexGrow:1}}>      
                            <Text style={{fontSize:25, fontWeight:"bold", color:'#fff'}}>Create Task</Text>
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
                                        onChangeText={(value) => this.setState({ newTasktitle : value})}
                                        style={{ marginLeft:5, color:'#000', fontSize:18,marginTop:5 ,
                                    }} />
                                </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:18, fontWeight:'500',marginTop:20, marginLeft:5,flex:2}}>Assignee: </Text>
                                <View style={{marginTop:10, marginRight:10, flex:5,}}>
                                    <MultiSelect
                                        hideTags
                                        items={items}
                                        uniqueKey="id"
                                        ref={(component) => { this.multiSelect = component }}
                                        onSelectedItemsChange={this.onSelectedItemsChange}
                                        selectedItems={selectedItems}
                                        selectText="  Select Assignee"
                                        searchInputPlaceholderText="Select Assignee"
                                        onChangeInput={ (text)=> console.log(text)}                          
                                        tagRemoveIconColor="#CCC"
                                        tagBorderColor="#CCC"
                                        tagTextColor="#CCC"
                                        selectedItemTextColor="#CCC"
                                        selectedItemIconColor="#CCC"
                                        itemTextColor="#000"
                                        displayKey="name"
                                        searchInputStyle={{ color: '#CCC' }}
                                        submitButtonColor="#1A3C6B"
                                        submitButtonText="Submit"
                                    />
                                </View>
                        </View>
                        <View style={{height:300, marginTop:10, borderTopColor:'#F26725', borderTopWidth:0.5, marginLeft:5, marginRight:5}}>
                            <Text style={{ textAlign: "left", fontSize:18, fontWeight:'500', marginTop:10 }}>Description:</Text>
                                <ScrollView style={{maxHeight:250,backgroundColor:'rgba(220, 220, 220, 0.3)', borderRadius:8, marginTop:20 , borderWidth:0.5, borderColor:'#000', padding:10}}>
                                    <TextInput      
                                        multiline={true} 
                                        editable = {true}  
                                        onChangeText={(value) => this.setState({ newTaskDescription : value})}
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
                                    onDateChange={(date) => {this.setState({startDate: date}), console.log(this.state.startDate)}}
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
                                        onDateChange={(date) => {this.setState({endDate: date}), console.log(this.state.endDate)}}
                                    />
                            </View>
                            <View style={{ marginTop:10, borderBottomColor:'#F26725', borderBottomWidth:0.5, marginLeft:5, marginRight:5, paddingBottom:5, flexDirection:'column'}}>
                                <Text style={{ textAlign: "left", fontSize:18, fontWeight:'500', marginTop:10 }}>Priority Level:</Text>  
                            </View>
                            <Picker
                                placeholder="Select"
                                selectedValue={this.state.priorityLevel}
                                style={{height: 55, fontSize:18, margin:5, borderWidth:0.5, borderBottomColor:'gray', borderRadius:8}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({priorityLevel: itemValue})
                                }>
                                <Picker.Item label="Low" value="low" />
                                <Picker.Item label="Normal" value="Normal" />
                                <Picker.Item label="High" value="High" />
                            </Picker>
                            <TouchableOpacity
                                onPress={()=> {this.test(), console.log(this.state.newtask)}}
                                style={{ 
                                    marginRight:10, 
                                    marginLeft:10,
                                    borderRadius:50, 
                                    marginTop:10, 
                                    backgroundColor: '#1A3C6B', 
                                    height:40, 
                                    borderColor:'#F26725', 
                                    borderWidth:1}}>
                                <Text style={{textAlign:'center', color:'#fff', fontSize:20, marginTop:3}}>Save</Text>
                            </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
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