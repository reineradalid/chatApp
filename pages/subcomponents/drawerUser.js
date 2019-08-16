

import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import {getData} from '../../storage/storage_action';


export default  class EventTrends extends React.Component{
    constructor(props){
      super(props);
      this.onClose = () => {
        this.setState({
          visible: false,
        });
      };
     
        this.state = {
            my_name : null,
            my_pic : null,
            my_position: null
        }
    }


    componentDidMount=()=>{      
            this.GETMYDATA();
    }

    GETMYDATA = async() =>{

        var data =  getData("LOGIN_DATA");

        const retrived_data = data.then(mydata => {
            console.log('MY STORED DATA :', mydata)
            extracted = JSON.parse(mydata);
            this.setState({my_name : extracted.f_name + ' ' + extracted.l_name, my_pic : 'https://crm.jobstreamapp.io/assets/user_img/' + extracted.img, my_position: extracted.position})
        });
    }
    
    

      render(){
 
            return (

                <View style={{ height:"42%", backgroundColor: '#F26725', marginBottom : 5}}> 
                    <View style={{
                        minHeight: 70,
                        width: "100%",
                        maxHeight:80,
                        
                        marginTop:"8%",
                        marginBottom:5,
                        borderRadius:50,
                        justifyContent:'center',
                        alignItems:'center'}}>
                    <Image
                        style={styles.image}
                        source={{
                        uri: this.state.my_pic,
                        }}
                    />
                    </View>
                    
                    <Text style={{textAlign: 'center', color : '#fff', fontSize : 18, fontWeight : 'bold'}}>{this.state.my_name}</Text>
                    <Text style={{ marginLeft:'20%', marginRight:'20%',textAlign: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 1, paddingBottom: 1, borderRadius : 50, backgroundColor : '#fff'}}>{this.state.my_position}</Text>
                    
                </View>
            )
        
        }
        
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          // paddingTop: Constants.statusBarHeight,
          backgroundColor: '#ecf0f1',
          padding: 8,
        },
        paragraph: {
          margin: 24,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        image: {
          minHeight: 60,
          minWidth: 60,
          maxHeight:70,
          maxWidth:70,
          backgroundColor:'#fff',
          alignSelf:'center',
         
          borderRadius:50
        },
      });