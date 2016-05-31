//http://www.iana.org/assignments/media-types/media-types.xhtml

//TODO
export default ( headers, body ) => {
    let type = headers[ 'content-type' ],
        types

    if ( !type ) {
        return 'other'
    }

    types = type.split( '/' )

    if ( type.indexOf( 'html' ) != -1 ) {
        return 'html'
    }

    if ( type.indexOf( 'json' ) != -1 ) {
        if ( body.indexOf( '{' ) != -1 ) {
            return 'json'
        } else {
            return 'js'
        }
    }

    if ( types[ 0 ] === 'image' ) {
        return 'img'
    }

    if ( type.indexOf( 'javascript' ) != -1 ) {
        return 'js'
    }

    if ( type.indexOf( 'text/css' ) != -1 ) {
        return 'css'
    }

    if ( type.indexOf( 'text/plain' ) != -1 ) {
        let type
        if ( body.indexOf( '{' ) != -1 ) {
            try {
                JSON.parse( body )
                type = 'json'
            } catch ( e ) {
                type = 'other'
            } finally {
                return type
            }
        }
    }

    return 'other'
}
