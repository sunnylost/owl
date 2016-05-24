import Util from '../util'
import urlLib from 'url'

//TODO
let parseType       = headers => {
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
    },

    parseObjToArray = obj => {
        return Object.keys( obj ).map( key => [ key, obj[ key ] ] )
    },

    parseQuery      = url => {
        let queryStr = urlLib.parse( url ).query

        if ( !queryStr ) return null

        return queryStr.split( '&' ).map( item => item.split( '=' ) )
    }

class URL {
    constructor( { req, res, body } ) {
        return {
            id        : Util.generateID(),
            url       : req.url,
            type      : parseType( res.headers ),
            general   : {
                url   : req.url,
                method: req.method,
                status: res.statusCode
            },
            reqHeaders: parseObjToArray( req.headers ),
            resHeaders: parseObjToArray( res.headers ),
            query     : parseQuery( req.url ),
            body
        }
    }
}

export default URL
