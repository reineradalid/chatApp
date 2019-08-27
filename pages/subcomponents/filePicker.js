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
        Keyboard} from 'react-native'
        
import Icons from 'react-native-vector-icons/FontAwesome'
import {
    Button,
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
    
  } from '@ant-design/react-native';
import * as DocumentPicker from 'expo-document-picker';



export default class FilePickers extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        visible:false,
        img:null,
        documentinput:[]
      };
        
    }


    doucumentPick = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log(result);
      this.setState({doumentInput: result})
  }

  imagePick = async () => {
      let result = await DocumentPicker.getDocumentAsync({})
      console.log(result);
      this.setState({image: result.uri})
  }


render(){
  return(
    <Provider>
    <View>
                    <TouchableOpacity 
                                onPress={()=> this._pickImage() }
                                    style={{ 
                                   
                                    marginRight:'3%',
                                    alignItems:'center',
                                    justifyContent:'center',
                                            
                                          flex:1}}>
                                    <Icon name="paperclip" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                                </TouchableOpacity> 
    </View>
   </Provider>

  )
}
}
