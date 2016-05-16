import { combineReducers } from 'redux'
import server from './server'
import urls from './urls'

const App = combineReducers( {
    server, urls
} )

export default App
