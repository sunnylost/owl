import React from 'react'
import { connect } from 'react-redux'
import { changePort } from '../actions'
import Infobar from '../components/infobar'

const mapStateToProps = ( state ) => {
    return {
        port: state.infobar.port,
        ip  : state.infobar.ip
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        changePort( port ) {
            dispatch( changePort( port ) )
        }
    }
}

const InfobarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Infobar )

export default InfobarContainer
