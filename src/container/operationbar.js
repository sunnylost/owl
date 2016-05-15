import React from 'react'
import { connect } from 'react-redux'
import { startServer, stopServer } from '../actions'
import Operationbar from '../components/operationbar'

const mapStateToProps = ( state ) => {
    return state.server
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        toggleServer( isStart ) {
            dispatch( ( isStart ? startServer : stopServer )() )
        }
    }
}

const OperationbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Operationbar )

export default OperationbarContainer
