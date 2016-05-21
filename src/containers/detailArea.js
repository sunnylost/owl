import React from 'react'
import { connect } from 'react-redux'
import DetailTable from '../components/detailTable'

class DetailArea extends React.Component {
    render() {
        console.log(this.props)
        let props = this.props,
            className = 'detail-area ' + ( this.props.data ? 'show' : '' )

        return <div className={ className }>
            <DetailTable { ...props.data }/>.
        </div>
    }
}

const mapStateToProps = ( state ) => {
    return {
        data: state.urls.selected
    }
}

const DetailAreaContainer = connect(
    mapStateToProps
)( DetailArea )


export default DetailAreaContainer
