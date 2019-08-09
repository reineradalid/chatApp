import React, { Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View} from 'react-native'

class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Calendar style={{
                        borderRadius:8,
                        borderWidth: 0.2,
                        borderColor: 'gray',
                        height: 350, 
                        margin:10
                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
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
                        arrowColor: 'orange',
                        monthTextColor: 'blue',
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
                        
                    }} />
            </View>
            
        );
    }
}

export default Calendars;