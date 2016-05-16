import Http from 'http'
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

            var proxyReq = http.request( option, proxyRes => {
                addURL( {
                    url,
                    headers
                } )
                res.writeHead( proxyRes.statusCode, proxyRes.headers )
                proxyRes.pipe( res )
            } )

            req.pipe( proxyReq )
        } ).listen( config.port )
    },

    stop() {
        server.close()
    }
}
