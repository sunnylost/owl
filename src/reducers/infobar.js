import actionTypes from '../util/actionTypes'
import Util from '../util'

const initialState = {
    ip  : Util.getIP(),
    port: Util.getPort(),
    url : ''
}

const infobar = ( state = initialState, action ) => {
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
    }

    return state
}

export default infobar
