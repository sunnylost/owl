import OS from 'os'
import Cluster from 'cluster'
import { addURL } from '../actions'

let workers = []

const send = ( msg, callback ) => {
          workers.forEach( worker => {
              worker.send( msg )
              callback && callback( worker )
          } )
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
                console.log( 'MSg from worker = ', msg )
                switch ( msg.type ) {
                    case 'add':
                        addURL( msg.data )
                        break
                }
            } )
            workers.push( worker )
        } )
    },

    stop() {
        end()
    }
}

export default Server
