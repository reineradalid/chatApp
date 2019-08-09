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
    render() {
<<<<<<< HEAD

        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key:'workout', color: 'green'};

    // testfun=()=>{
    //     this.setState({visible:true})
    // }

        const footerButtons = [
            { text: 'Complete', onPress: () => console.log('Complete') },
            { text: 'Cancel', onPress: () => console.log('ok') },
           
          ];
=======
>>>>>>> parent of f92d48c... Fix navigation / Add calendar marker
        return (
            <View style={{flex:1}}>
                <Calendar style={{
                            borderRadius:8,
                            borderWidth: 0.2,
                            borderColor: 'gray',
                            height: 350, 
                            margin:10
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
                        
                        markedDates={{
                            '2019-08-09': {dots: [massage, workout], selected: true},
                            '2019-08-10': {dots: [vacation, massage, workout]}
                        }}
                        markingType={'multi-dot'}
                        onDayPress={()=> {this.setState({visible:true})}}
                        
<<<<<<< HEAD
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
=======
                    }} />
>>>>>>> parent of f92d48c... Fix navigation / Add calendar marker
            </View>
            
        );
    }
}



export default () => (
    <Provider>
      <Calendars />
    </Provider>
  );