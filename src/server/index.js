import OS from 'os'
import Cluster from 'cluster'
import { addURL } from '../actions'

const send = ( msg, callback ) => {
          for ( let id in Cluster.workers ) {
              let worker = Cluster.workers[ id ]
              worker.send( msg )
              callback && callback( worker )
          }
      },

      end  = () => {
          send( 'KILL', ( worker ) => {
              worker.disconnect()
          } )
      }

const Server = {
    start( config ) {
        Cluster.setupMaster( {
            exec: `${ __dirname }/proxy.js`,
            args: [ `--config=${ JSON.stringify( config ) }` ]
        } )

        OS.cpus().forEach( () => {
            let worker = Cluster.fork( config )
            worker.on( 'message', msg => {
                switch ( msg.type ) {
                    case 'add':
                        addURL( msg.data )
                        break
                }
            } )
        } )
    },

    stop() {
        end()
    }
}

export default Server
