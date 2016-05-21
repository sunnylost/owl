import React from 'react'
import { connect } from 'react-redux'
import URLList from '../components/urlList'
import { displayDetailURL } from '../actions'

class URLArea extends React.Component {
    render() {
        return <div className="url-area">
            <URLList { ...this.props }/>
        </div>
    }
}

const mapStateToProps = ( state ) => {
    return {
        urls: state.urls.current
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        displayDetail( id ) {
            dispatch( displayDetailURL( id ) )
        }
    }
}

const URLAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( URLArea )


export default URLAreaContainer
