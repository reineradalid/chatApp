import rootReducer from '../Reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createStore} from 'redux';

export default function configStore() {
    let persistConfig = {
        key : 'root',
        storage
    }

    let persistedReducer = persistReducer(persistConfig, rootReducer);

    return (
        createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}
