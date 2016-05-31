import Util from '../util'
import urlLib from 'url'
import MIMEType from '../util/mimeType'

//TODO
let parseObjToArray = obj => {
        return Object.keys( obj ).map( key => [ key, obj[ key ] ] )
    },

    parseQuery      = url => {
        let queryStr = urlLib.parse( url ).query

        if ( !queryStr ) return null

        return queryStr.split( '&' ).map( item => item.split( '=' ) )
    }

class URL {
    constructor( { url, method, status, reqHeaders, resHeaders, body } ) {
        let host     = reqHeaders.host,
            domain   = host.split( ':' )[ 0 ],
            protocol = urlLib.parse( url ).protocol,
            path     = url.replace( protocol + '//', '' ).replace( host, '' )

        return {
            id        : Util.generateID(),
            url,
            domain,
            protocol,
            path,
            host,
            type      : MIMEType( resHeaders, body ),
            general   : {
                url,
                method,
                status
            },
            reqHeaders: parseObjToArray( reqHeaders ),
            resHeaders: parseObjToArray( resHeaders ),
            query     : parseQuery( url ),
            body
        }
    }
}

export default URL
