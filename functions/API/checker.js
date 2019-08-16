
import React from 'react';
import {Text} from 'react-native';
import {getData} from '../../storage/storage_action';
export default class App extends React.Component{

    componentDidMount(){

        const stored = getData('LOGIN_DATA');
        const new_data = stored.then(data => {
            //this.props.navigation._childrenNavigation.Dashboard.actions.navigate('Login')
            // console.log("FETCH", this.props.props.descriptors.Dashboard.navigation.actions.navigate('Login'));
            this.props.props.descriptors.Dashboard.navigation.actions.goBack()
            if(data === undefined){
                this.props.navigation._childrenNavigation.Dashboard.actions.navigate('Login')
            }

        });

    }


    render(){
        // console.log('CHECKER', this.props)
        return (
            <Text> </Text>
        );
    }
}