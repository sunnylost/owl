var actions = {};
[
    'PORT_CHANGE',
    'URL_FILTER',
    'URL_FILTER_CLEAR',
    'SERVER_START',
    'SERVER_STOP',
    'SCREEN_CLEAR',
    'RESET',
    'SEARCH'
].forEach( name => actions[ name ] = name )

export default actions
