import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middlewares/index.js'
import thunk from 'redux-thunk'
import { ROOT_REDUCER } from './reducers/root.js'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const composeEnhansers = composeAlt(applyMiddleware(thunk, logger))

const store = createStore(
  ROOT_REDUCER,
  composeEnhansers
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
