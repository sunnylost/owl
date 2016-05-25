//http://www.iana.org/assignments/media-types/media-types.xhtml

export default ( type ) => {
    let types = type.split( '/' )

    if ( type.indexOf( 'html' ) != -1 ) {
        return 'html'
    }

    if ( type.indexOf( 'json' ) != -1 ) {
        return 'json'
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

    return 'other'
}
