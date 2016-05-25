import React from 'react'
import { connect } from 'react-redux'
import Console from '../components/console'
import { executeCommand } from '../actions'

class ConsoleWrap extends React.Component {
    render() {
        return <div className='console-wrap'>
            <Console { ...this.props }/>
        </div>
    }
}

const mapStateToProps = ( state ) => {
    return state.command
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        execute( command ) {
            console.log( command )
            dispatch( executeCommand( command ) )
        }
    }
}

const ConsoleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( ConsoleWrap )


export default ConsoleContainer
