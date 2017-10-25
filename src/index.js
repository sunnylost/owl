import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import App from './app'

const store = createStore( reducers, applyMiddleware( thunk ) )
global.Store = store

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById( 'app' )
)
