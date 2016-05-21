import React from 'react'
import { connect } from 'react-redux'
import { startServer, stopServer, changePort, clearScreen } from '../actions'
import Infobar from '../components/infobar'
import Operationbar from '../components/operationbar'

class Toolbar extends React.Component {
    render() {
        return <div className="toolbar">
            <Infobar { ...this.props }/>
            <Operationbar { ...this.props } />
        </div>
    }
}

const mapStateToProps = ( state ) => {
    return state.server
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        changePort( port ) {
            dispatch( changePort( port ) )
        },

        toggleServer( isStart ) {
            dispatch( ( isStart ? startServer : stopServer )() )
        },

        clear() {
            dispatch( clearScreen() )
        }
    }
}

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Toolbar )


export default ToolbarContainer
