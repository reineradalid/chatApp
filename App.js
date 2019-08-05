import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import AppIndex from './pages/index';
import {createStore} from 'redux';
import Reducer from './Reducer';


const store = createStore(Reducer);

const AppContainer = () =>
  <Provider store={store}>
    <AppIndex/>
  </Provider>

export default function App() {
  return AppContainer();
}

//AppRegistry.registerComponent("chatApp", () => AppContainer);


