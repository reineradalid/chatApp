
import React, { Component } from 'react'
import DocumentPicker from 'react-native-document-picker';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Text, View, StyleSheet ,TextInput,Image,StatusBar} from 'react-native';

// Pick a single file
async function test =()=>{
    try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        );
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
      
      // Pick multiple files
      try {
        const results = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.images],
        });
        for (const res of results) {
          console.log(
            res.uri,
            res.type, // mime type
            res.name,
            res.size
          );
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }

}


export default class FilePicker extends Component {
    render() {
        return (
           <View style={{flex:1}}>
               <TouchableOpacity 
               onPress={()=>this.test()}
                    style={{ 
                    marginTop:'-1%',
                    marginRight:'3%',
                    alignItems:'center',
                    justifyContent:'center',
                            
                            flex:1}}>
                    <Icon name="paperclip" size={30} color="#000" style={{textAlign:'left', flexDirection:'column'}} />   
                </TouchableOpacity> 

            </View>
        )
    }
}
