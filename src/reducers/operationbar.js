import actionTypes from '../util/actionTypes'

const initialState = {
    isRunning: false
}

const operationbar = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SERVER_START:
            return Object.assign( {}, state, {
                isRunning: true
            } )

        case actionTypes.SERVER_STOP:
            return Object.assign( {}, state, {
                isRunning: false
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
