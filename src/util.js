let OS     = require( 'os' ),
    Config = require( '../config.json' ),
    gid    = 1

const Util = {
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
    },

    generateID() {
        return gid++
    }
}

module.exports = Util
