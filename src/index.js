import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './store/reducers/index';
import './index.css';
import App from './App';
import { verifyAuth } from './store/actions/auth';


function configureStore(persistedState) {
  const store = createStore(
    Reducer,
    persistedState,
    applyMiddleware(thunk)
  );
  // store.dispatch(verifyAuth());
  return store;
}
const store = configureStore();
const app = (
            <Provider store={ store }>
              <App/>
            </Provider>
            );
            
ReactDOM.render(
    app,
  document.getElementById('root')
);
