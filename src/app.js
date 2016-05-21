/**
 * AppState {
 *      server {
 *          isRunning
 *          port
 *          ip
 *      }
 *      urls
 *          all
 * }
 *
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
import Toolbar from './containers/toolbar'
import URLArea from './containers/urlArea'
import DetailArea from './containers/detailArea'

class App extends React.Component {
    render() {
        return <div class="app-wrap">
            <Toolbar/>
            <URLArea/>
            <DetailArea/>
        </div>
    }
}

export default App
