import { combineReducers } from 'redux'
import infobar from './infobar'
import operationbar from './operationbar'

const App = combineReducers( {
    infobar, operationbar
} )

export default App
