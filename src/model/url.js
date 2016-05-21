import Util from '../util'

let parseType = headers => {
    let type = headers[ 'content-type' ]

    if ( type ) {
        [ , type ] = type.match( /.+\/([^;]+)/ )
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
