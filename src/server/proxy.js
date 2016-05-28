import Http from 'http'
import Zlib from 'zlib'
import { Transform } from 'stream'

const zipMethodMap = {
    'gzip'   : 'unzip',
    'deflate': 'Inflate'
}

let env = process.env,
    server

//TODO
process.on( 'message', ( msg ) => {
    console.log( msg )
    if ( msg === 'KILL' ) {
        Proxy.stop()
    }
} )

const send = ( data ) => {
    process.send( data )
}

const Proxy = {
    start() {
        server = Http.createServer( ( req, res ) => {
            var headers = req.headers,
                method  = req.method || 'GET',
                hostes  = headers.host.split( ':' ),
                url     = req.url,

                option  = {
                    host: hostes[ 0 ],
                    port: hostes[ 1 ] || 80,
                    path: url,
                    method,
                    headers
                }

            //TODO
            var proxyReq = Http.request( option, proxyRes => {
                let chunks    = [],
                    zipMethod = proxyRes.headers[ 'content-encoding' ],
                    parser    = new Transform( {
                        transform( chunk, encoding, next ) {
                            chunks.push( chunk )
                            this.push( chunk )
                            next()
                        },

                        flush( done ) {
                            let finish = ( err, buffer ) => {
                                    send( {
                                        type: 'add',
                                        data: {
                                            url       : req.url,
                                            method    : req.method,
                                            status    : proxyRes.statusCode,
                                            reqHeaders: req.headers,
                                            resHeaders: proxyRes.headers,
                                            body      : buffer ? buffer.toString() : ''
                                        }
                                    } )

                                    done()
                                },
                                buffer = Buffer.concat( chunks )

                            if ( zipMethod ) {
                                Zlib[ zipMethodMap[ zipMethod ] ]( buffer, finish )
                            } else {
                                finish( null, buffer )
                            }
                        }
                    } )

                delete proxyRes.headers[ 'content-length' ]
                res.writeHead( proxyRes.statusCode, proxyRes.headers )
                proxyRes.pipe( parser ).pipe( res )
            } )

            req.pipe( proxyReq )
        } ).listen( env.port )
    },

    stop() {
        server.close()
    }
}

Proxy.start()
