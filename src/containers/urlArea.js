import React from 'react'
import { connect } from 'react-redux'
import URLList from '../components/urlList'
import URLFilter from '../components/urlFilter'
import { displayDetailURL, filterURL } from '../actions'

class URLArea extends React.Component {
    render() {
        return <div className="url-area">
            <URLFilter filterURL={ this.props.filterURL }/>
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
        },

        filterURL( type ) {
            dispatch( filterURL( {
                type
            } ) )
        }
    }
}

const URLAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( URLArea )


export default URLAreaContainer
