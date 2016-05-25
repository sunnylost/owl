import React from 'react'
import { connect } from 'react-redux'
import Console from '../components/console'

class ConsoleWrap extends React.Component {
    render() {
        return <div className='console-wrap'>
            <Console />
        </div>
    }
}

const mapStateToProps = ( state ) => {
    return {
        data: state.urls.selected
    }
}

const ConsoleContainer = connect(
    mapStateToProps
)( ConsoleWrap )


export default ConsoleContainer
