import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';


const feelingReducer = (state = [], action) => {
    if (action.type === 'SUBMIT_FEELING') {
        return action.payload
    }
    return state;
  }

const understandingReducer = (state = [], action) => {
    if (action.type === 'SUBMIT_UNDERSTANDING') {
        return action.payload
    }
    return state;
  }

const supportedReducer = (state = [], action) => {
    if (action.type === 'SUBMIT_SUPPORTED') {
        return action.payload
    }
    return state;
  }

const commentsReducer = (state = [], action) => {
    if (action.type === 'SUBMIT_COMMENTS') {
        return action.payload
    }
    return state;
  }


const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;