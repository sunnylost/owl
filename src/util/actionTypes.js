var actions = {};
[
    'PORT_CHANGE',
    'SERVER_START',
    'SERVER_STOP',
    'SCREEN_CLEAR',
    'RESET',
    'URL_ADD',
    'URL_FILTER',
    'URL_FILTER_CLEAR',
    'URL_CLEAR',
    'URL_SORT',
    'URL_DETAIL',
    'URL_HIDE_DETAIL',
    'COMMAND_EXECUTE',
    'COMMAND_RESULT'
].forEach( name => actions[ name ] = name )

export default actions
