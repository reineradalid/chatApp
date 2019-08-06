/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import Home from './pages/Home';
import {name as appName} from './app.json';
import Splash from './pages/Splash.js';


import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import Reducer from './Reducer';

import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react';
import myStore from './Store/index.js';

let persistor = persistStore(myStore);
//const store = createStore(Reducer);

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
        let mainScreen = currentScreen ==="Splash"? <Splash/>: <Provider store={myStore}><PersistGate loading={null} persistor = {persistor}>{this.screenRelease()}</PersistGate></Provider>
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main);
