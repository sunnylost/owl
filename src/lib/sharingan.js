var NOOP       = function () {
        return true
    },
    oldError   = win.onerror || NOOP,
    oldConsole = win.console,
    newConsole = {},
    send       = function ( data ) {
        ws && ws.send( JSON.stringify( data ) )
    },
    ws

for ( var key in oldConsole ) {
    newConsole[ key ] = function ( key ) {
        return function () {
            oldConsole[ key ].apply( arguments )
            send( arguments )
        }
    }( key )
}

win.console = newConsole

win.onerror = function () {
    oldError.apply( win, arguments )
    send( arguments )
}

function init() {
    if ( typeof win.WebSocket !== 'undefined' ) {
        ws = new WebSocket( url )

        ws.onopen = function () {
        }

        ws.onmessage = function ( message ) {
        }
    }
}

init()
