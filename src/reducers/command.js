import actionTypes from '../util/actionTypes'

const initialState = {
    history: []
}

const urls = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.COMMAND_EXECUTE:
            return Object.assign( {}, state, {
                history: [ ...state.history, {
                    type : 'command',
                    value: action.command
                } ]
            } )

        case actionTypes.COMMAND_RESULT:
            return Object.assign( {}, state, {
                history: [ ...state.history, {
                    type : 'result',
                    value: action.result
                } ]
            } )
    }

    return state
}

export default urls
