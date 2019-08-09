import React, { Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View,Text} from 'react-native'
import {
    Button,
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
  } from '@ant-design/react-native';



class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = () => {
            this.setState({
              visible: false,
            });
          };
         
        this.state = {   visible: false, };
    }

    // testfun=()=>{
    //     this.setState({visible:true})
    // }
    render() {
        const footerButtons = [
            { text: 'Complete', onPress: () => console.log('Complete') },
            { text: 'Cancel', onPress: () => console.log('ok') },
           
          ];
        return (
            <View style={{flex:1}}>
                <Calendar style={{
                        borderBottomStartRadius:8,
                        borderBottomEndRadius:8,
                        borderWidth: 0.3,
                        borderColor: '#F26725',
                        height: 350, 
                        marginBottom:10,
                        marginLeft:10,
                        marginRight:10
                    }}
                  
                    theme={{
                        
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: '#F26725',
                        monthTextColor: '#F26725',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                        
                    }}
                    onDayPress={()=> {this.setState({visible:true})}}
                    
                    />

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
                        <View style={{ paddingVertical: 20 }}>
                            <Text style={{ textAlign: 'center' }}>Content...</Text>
                            <Text style={{ textAlign: 'center' }}>Content...</Text>
                        </View>
                        
                    </Modal>
            </View>
            
        );
    }
}



export default () => (
    <Provider>
      <Calendars />
    </Provider>
  );