/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import Home from './pages/Home';
import {name as appName} from './app.json';
import Splash from './pages/Splash.js';

export default class Main extends React.Component{


    
    constructor(props){
        super(props);
        this.state={
            currentScreen:"Splash",
            screen : <App />,
            test : false
        }

        setTimeout(()=>{
            this.setState({currentScreen:"App"})
        },2500)
    }

    test = () =>{
        if(this.state.test == true){
            this.setState({screen : <Home />})
        }
    }

    screenRelease = () => {

        if(this.state.test === true){
            return <Home/>
        }else{
            return <App />
        }

    }

    render(){
        const {currentScreen} =this.state
        let mainScreen = currentScreen ==="Splash"? <Splash/>: this.screenRelease()
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main);
