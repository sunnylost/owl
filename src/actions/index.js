import actionTypes from '../util/actionTypes'

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
    return {
        type: actionTypes.SERVER_START
    }
}

export const stopServer = () => {
    return {
        type: actionTypes.SERVER_STOP
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
