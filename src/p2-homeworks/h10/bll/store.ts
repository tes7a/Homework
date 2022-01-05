import {applyMiddleware, combineReducers, createStore} from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";
import {apiReducer} from "../../h13/api/api-reducer";
import thunk from 'redux-thunk';

 const reducers = combineReducers({
     loadingState: loadingReducer,
     theme: themeReducer,
     api: apiReducer
 })

 const store = createStore(reducers, applyMiddleware(thunk));

 export default store

 export type AppStoreType = ReturnType<typeof reducers>

 // @ts-ignore
 window.store = store // for dev
