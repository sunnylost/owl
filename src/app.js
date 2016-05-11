/**
 * Toolbar
 *      InforBar
 *          - State:
 *              IP
 *              Port
 *          - Action:
 *              {
 *                  type: "PORT_CHANGE",
 *                  port: 4000
 *              }
 *              {
 *                  type: "URL_FILTER",
 *                  url: url
 *              }
 *              {
 *                  type: "URL_FILTER_CLEAR"
 *              }
 *      OperationBar
 *          - State:
 *              isRunning: Server State
 *          - Action:
 *              {
 *                  type: 'SERVER_START'
 *              }
 *              {
 *                  type: 'SERVER_STOP'
 *              }
 *              {
 *                  type: 'SCREEN_CLEAR'
 *              }
 *              {
 *                  type: 'RESET'
 *              }
 *              {
 *                  type: 'SEARCH',
 *                  keyword: keyword
 *              }
 *      SearchBar
 * URLArea
 *      URLList
 *          URLItem
 * DetailArea
 */
import React from 'react'
import Toolbar from './components/toolbar'
//import URLArea from './components/urlArea'
//import DetailArea from './components/detailArea'

class App extends React.Component {
    render() {
        return <div class="app-wrap">
            <Toolbar/>
        </div>
    }
}

export default App
