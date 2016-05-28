import actionTypes from '../util/actionTypes'
import Server from '../server'
import URL from '../model/url'

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
    let url = new URL( data )
    
    global.Store.dispatch( {
        type: actionTypes.URL_ADD,
        url
    } )

    return url
}

export const displayDetailURL = ( id ) => {
    return {
        type: actionTypes.URL_DETAIL,
        id
    }
}

export const filterURL = ( filterType ) => {
    return {
        type: actionTypes.URL_FILTER,
        filterType
    }
}

export const hideDetail = () => {
    return {
        type: actionTypes.URL_HIDE_DETAIL
    }
}

export const executeCommand = ( command ) => {
    return {
        type: actionTypes.COMMAND_EXECUTE,
        command
    }
}
