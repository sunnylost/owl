import actionTypes from '../util/actionTypes'
import Util from '../util'

const initialState = {
    ip        : Util.getIP(),
    port      : Util.getPort(),
    url       : '',
    isRunning : false,
    statusText: ''
}

const server = ( state = initialState, action ) => {
    switch ( action.type ) {
    case actionTypes.PORT_CHANGE:
        return Object.assign( {}, state, {
            port: action.port
        } )

    case actionTypes.URL_FILTER:
        return Object.assign( {}, state, {
            url: action.url
        } )

    case actionTypes.URL_FILTER_CLEAR:
        return Object.assign( {}, state, {
            url: ''
        } )

    case actionTypes.SERVER_START:
        return Object.assign( {}, state, {
            isRunning : true,
            statusText: '服务正在运行'
        } )

    case actionTypes.SERVER_STOP:
        return Object.assign( {}, state, {
            isRunning : false,
            statusText: '服务已经停止'
        } )

    case actionTypes.SCREEN_CLEAR:
        return Object.assign( {}, state )

    case actionTypes.RESET:
        return Object.assign( {}, state )

    case actionTypes.SEARCH:
        return Object.assign( {}, state, {
            keyword: action.keyword
        } )
    }

    return state
}

export default server
