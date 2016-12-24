import {createStore, combineReducers, applyMiddleware} from 'redux';
import todoReducer from './reducers/todo';
import asyncReducer from './reducers/async';
import todomvcReducer from './reducers/todomvc';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

const rootReducer = combineReducers({
    todoReducer,todomvcReducer
});

const store = createStore(
  rootReducer,
  // todoReducer,
  applyMiddleware(thunk,logger())
);

export default store;
