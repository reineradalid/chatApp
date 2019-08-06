import React, { Component } from 'react';
import {View,StyleSheet, Text} from 'react-native'
import {createDrawerNavigator,} from 'react-navigation'
import myStore from '../Store';

class Home extends React.Component {
    
    render() {
        console.log(myStore.getState());
        return (
            <View style={{flex:1}}> 
                <View style={styles.container}>
                    <Text>
                        Test
                    </Text>
                </View>

            </View> 
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default Home;