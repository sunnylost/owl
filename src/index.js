import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './build/reducers'
import App from './build/app'

const store  = createStore( reducers )
global.Store = store

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById( 'app' )
)
