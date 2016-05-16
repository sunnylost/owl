import React from 'react'
import { connect } from 'react-redux'
import URLList from '../components/urlList'

class URLArea extends React.Component {
    render() {
        return <div className="url-area">
            <URLList urls={ this.props.urls }/>
        </div>
    }
}

const mapStateToProps = ( state ) => {
    return {
        urls: state.urls.current
    }
}

const URLAreaContainer = connect(
    mapStateToProps
)( URLArea )


export default URLAreaContainer
