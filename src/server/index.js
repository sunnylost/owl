import Proxy from './proxy'

const Server = {
    start( config ) {
        Proxy.start( config )
    },

    stop() {
        Proxy.stop()
    }
}

export default Server
