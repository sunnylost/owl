import OS from 'os'
import Cluster from 'cluster'
import WS from 'ws'
import { addURL } from '../actions'

let unsubscribe,
    wss

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
        let Store = global.Store,
            state = Store.getState().server,
            port  = 10000 + ( 10000 * Math.random() >>> 0 ),
            wss   = new WS.Server( {
                port
            } ),
            prevState

        unsubscribe = Store.subscribe( () => {
            let curState = Store.getState().command

            if ( curState.isSpy && prevState !== curState ) {
                prevState = curState
            }
        } )

        wss.on( 'connection', ws => {
            ws.on( 'message', message => {
                console.log( 'incoming: ', message )
                ws.send( 'yes!' )
            } )
        } )

        config.wsURL = `ws://${ state.ip }:${ port }`

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
        wss && wss.close()
        end()
        unsubscribe()
    }
}

export default Server
