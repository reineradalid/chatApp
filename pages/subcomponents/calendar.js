import React, { Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View} from 'react-native'

class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {

        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key:'workout', color: 'green'};

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
                        
                    }}
                    
                    onDayPress={(day) => {console.log('selected day ', day)}}

                    markedDates={{
                        '2019-08-09': {dots: [massage, workout], selected: true},
                        '2019-08-10': {dots: [vacation, massage, workout]}
                    }}
                    markingType={'multi-dot'}
                    />
            </View>
            
        );
    }
}

export default Calendars;