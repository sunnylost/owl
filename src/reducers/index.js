import { combineReducers } from 'redux'
import server from './server'
import urls from './urls'
import command from './command'

const App = combineReducers( {
    server, urls, command
} )

export default App
