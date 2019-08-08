import React, { Component } from 'react';


import {Text, View, TouchableHighlight} from 'react-native'

class Convo extends Component {
    constructor(props) {
        super(props);
        this.state = { test:'' };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <TouchableHighlight>
                    <Text>Test</Text>
                </TouchableHighlight>
            </View>
            
        );
    }
}

export default Convo;