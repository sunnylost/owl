import actionTypes from '../util/actionTypes'

const initialState = {
    isRunning : false,
    statusText: ''
}

const operationbar = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SERVER_START:
            return Object.assign( {}, state, {
                isRunning: true,
                statusText: '服务正在运行'
            } )

        case actionTypes.SERVER_STOP:
            return Object.assign( {}, state, {
                isRunning: false,
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

export default operationbar
