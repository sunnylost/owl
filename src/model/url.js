import Util from '../util'
import urlLib from 'url'
import MIMEType from '../util/mimeType'

//TODO
let parseType       = headers => {
        let type   = headers[ 'content-type' ],
            accept = headers.accept

        if ( type ) {
            return MIMEType( type )
        } else if ( accept ) {
            //TODO
            [ , type ] = accept.match( /^([^\/]+)\// )

            if ( type === '*' ) {
                type = 'other'
            }
        }

        return type || 'other'
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
        let reqHeaders = req.headers,
            resHeaders = res.headers,
            url        = req.url,
            host       = req.headers.host,
            domain     = host.split( ':' )[ 0 ],
            protocol   = urlLib.parse( url ).protocol,
            path       = req.url.replace( protocol + '//', '' ).replace( host, '' )

        return {
            id        : Util.generateID(),
            url,
            domain,
            protocol,
            path,
            host,
            type      : parseType( resHeaders ),
            general   : {
                url   : req.url,
                method: req.method,
                status: res.statusCode
            },
            reqHeaders: parseObjToArray( reqHeaders ),
            resHeaders: parseObjToArray( resHeaders ),
            query     : parseQuery( req.url ),
            body
        }
    }
}

export default URL
