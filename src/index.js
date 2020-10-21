import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
// reducers
import reducers from './reducers'

const store= createStore(
  reducers, // todos los reduces
  {}, //todos los estados
  applyMiddleware(reduxThunk) 
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 
  document.getElementById('root')
);


