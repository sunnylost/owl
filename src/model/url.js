import Util from '../util'

//TODO
let parseType = headers => {
    let type   = headers[ 'content-type' ],
        accept = headers.accept

    if ( type ) {
        [ , type ] = type.match( /.+\/([^;]+)/ )
    } else if ( accept ) {
        [ , type ] = accept.match( /^([^\/]+)\// )

        if ( type === '*' ) {
            type = 'other'
        }
    }

    return type || 'html'
}

class URL {
    constructor( data ) {
        return {
            id     : Util.generateID(),
            url    : data.url,
            type   : parseType( data.headers ),
            headers: data.headers
        }
    }
}

export default URL
