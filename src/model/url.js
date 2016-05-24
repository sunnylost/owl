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
    constructor( req, res ) {
        return {
            id        : Util.generateID(),
            url       : req.url,
            type      : parseType( res.headers ),
            general   : {
                url   : req.url,
                method: req.method,
                status: res.statusCode
            },
            reqHeaders: req.headers,
            resHeaders: res.headers
        }
    }
}

export default URL
