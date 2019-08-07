import rootReducer from '../Reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default function configStore() {
    let persistConfig = {
        key : 'root',
        storage
    }

    const loggerMiddleware = createLogger()

    let persistedReducer = persistReducer(persistConfig, rootReducer);

    return (
        createStore(persistedReducer, applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware // neat middleware that logs actions
          ))
    );
}
