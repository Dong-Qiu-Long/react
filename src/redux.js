import {createStore,applyMiddleware , bindActionCreators} from 'redux';
import * as actionTypes from './action/numAction';
import numReducer from './reducer/numReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const state = createStore(numReducer,applyMiddleware(thunk,logger))

const boundActions = bindActionCreators(actionTypes,state.dispatch);

boundActions.ADD();
console.log(state.getState());
boundActions.SUB();
console.log(state.getState());
boundActions.fetchUsers();
console.log(state.getState());
console.log(boundActions); 