import actionTypes from '../util/actionTypes'
import Server from '../server'

export const changePort = port => {
    return {
        type: actionTypes.PORT_CHANGE,
        port
    }
}

export const urlFilter = url => {
    return {
        type: actionTypes.URL_FILTER,
        url
    }
}

export const clearUrlFilter = () => {
    return {
        type: actionTypes.URL_FILTER_CLEAR
    }
}

//operationbar
export const startServer = () => {
    return ( dispatch, getState ) => {
        Server.start( {
            port: getState().server.port
        } )
        dispatch( {
            type: actionTypes.SERVER_START
        } )
    }
}

export const stopServer = () => {
    return ( dispatch ) => {
        Server.stop()
        dispatch( {
            type: actionTypes.SERVER_STOP
        } )
    }
}

export const clearScreen = () => {
    return {
        type: actionTypes.SCREEN_CLEAR
    }
}

export const reset = () => {
    return {
        type: actionTypes.RESET
    }
}

export const search = ( keyword ) => {
    return {
        type: actionTypes.SEARCH,
        keyword
    }
}

export const addURL = ( data ) => {
    let type = data.headers[ 'content-type' ],
        url

    if ( type ) {
        type = type.match( /.+\/([^;]+)/ )
        if ( type && type.length > 1 ) {
            type = type[ 1 ]
        }
    }

    type = type || 'html'

    url = {
        url    : data.url,
        type   : type,
        headers: data.headers
    }

    global.Store.dispatch( {
        type: actionTypes.URL_ADD,
        url
    } )
}

export const displayDetailURL = ( id ) => {
    return {
        type: actionTypes.URL_DETAIL,
        id
    }
}
