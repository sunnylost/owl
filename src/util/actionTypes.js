var actions = {};
[
    'PORT_CHANGE',
    'SERVER_START',
    'SERVER_STOP',
    'SCREEN_CLEAR',
    'RESET',
    'SEARCH',
    'URL_ADD',
    'URL_FILTER',
    'URL_FILTER_CLEAR',
    'URL_CLEAR',
    'URL_SORT'
].forEach( name => actions[ name ] = name )

export default actions
