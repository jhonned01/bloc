import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store= createStore(
  reducers, // todos los reduces
  {} //todos los estados
  )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


