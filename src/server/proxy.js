import Http from 'http'
import Zlib from 'zlib'
import { Transform } from 'stream'
import { addURL } from '../actions'

let server

export default {
    start( config ) {
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
                res.writeHead( proxyRes.statusCode, proxyRes.headers )

                let chunks = [],
                    isZip  = proxyRes.headers[ 'content-encoding' ] === 'gzip',
                    parser = new Transform( {
                        transform( chunk, encoding, next ) {
                            chunks.push( chunk )
                            this.push( chunk )
                            next()
                        },

                        flush( done ) {
                            let finish = ( err, buffer ) => {
                                    addURL( {
                                        req,
                                        res : proxyRes,
                                        body: buffer.toString()
                                    } )
                                    this.push( null )
                                    done()
                                },
                                buffer = Buffer.concat( chunks )

                            if ( isZip ) {
                                Zlib.unzip( buffer, finish )
                            } else {
                                finish( null, buffer )
                            }
                        }
                    } )

                parser.on( 'end', () => {
                    addURL( {
                        req,
                        res : proxyRes,
                        body: Buffer.concat( chunks ).toString()
                    } )
                } )

                proxyRes.pipe( parser ).pipe( res )
            } )

            req.pipe( proxyReq )
        } ).listen( config.port )
    },

    stop() {
        server.close()
    }
}
