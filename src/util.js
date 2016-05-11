var OS     = require( 'os' ),
    Config = require( '../config.json' )

var Util = {
    getIP() {
        var ifaces = OS.networkInterfaces(),
            ret    = []

        for ( var dev in ifaces ) {
            ifaces[ dev ].forEach( details => {
                if ( details.family == 'IPv4' && !details.internal ) {
                    ret.push( details.address )
                }
            } )
        }
        return ret.length ? ret[ 0 ] : null
    },

    getPort() {
        return Config.port
    }
}

module.exports = Util
